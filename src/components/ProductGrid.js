import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ addToCart, wishlist, toggleWishlist, isLoading: initialLoading, activeCategory, setActiveCategory, previewLimit, hideFilters }) => {
    const [products, setProducts] = useState([]);
    const [apiLoading, setApiLoading] = useState(true);
    const [sortBy, setSortBy] = useState('featured');

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setApiLoading(false);
            })
            .catch(err => {
                console.error("Failed to load products from API", err);
                setApiLoading(false);
            });
    }, []);

    const isCurrentlyLoading = initialLoading || apiLoading;

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });

    const displayedProducts = previewLimit ? sortedProducts.slice(0, previewLimit) : sortedProducts;

    return (
        <section id="shop" className="products">
            <div className="products-header">
                <h2 className="section-title">Featured Items</h2>
                {!hideFilters && (
                    <div className="filter-bar">
                        <select
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Categories</option>
                            <option value="rare books">Rare Books</option>
                            <option value="art prints">Art Prints</option>
                            <option value="ceramics">Ceramics</option>
                            <option value="textiles">Textiles</option>
                            <option value="apparel">Apparel</option>
                            <option value="stationery">Stationery</option>
                        </select>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="filter-select"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                )}
            </div>

            <div className="product-grid">
                {isCurrentlyLoading ? (
                    // Loading skeletons
                    [...Array(6)].map((_, i) => (
                        <div key={i} className="product-card skeleton-card">
                            <div className="skeleton skeleton-image"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div>
                    ))
                ) : (
                    displayedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            isWishlisted={wishlist.includes(product.id)}
                            toggleWishlist={toggleWishlist}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
