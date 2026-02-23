import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
    {
        id: 1,
        name: 'The Myth of Sisyphus - First Edition',
        price: 450,
        category: 'Rare Books',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: '1942 first edition, original French text'
    },
    {
        id: 2,
        name: 'Algerian Olive Wood Bowl',
        price: 85,
        category: 'Ceramics',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Hand-carved by artisans in Tipaza'
    },
    {
        id: 3,
        name: 'Mediterranean Linen Scarf',
        price: 65,
        category: 'Textiles',
        image: 'https://images.unsplash.com/photo-1584030373081-f37b7a8a3b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Hand-dyed with natural pigments'
    },
    {
        id: 4,
        name: 'Camus Philosophy Prints Set',
        price: 120,
        category: 'Art Prints',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb2367d3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Set of 3 abstract prints with quotes'
    },
    {
        id: 5,
        name: 'The Stranger - Annotated Copy',
        price: 95,
        category: 'Rare Books',
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: '1946 first American edition with critical essays'
    },
    {
        id: 6,
        name: 'Philosophy Journal - Linen Bound',
        price: 45,
        category: 'Textiles',
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Hand-bound journal with blank pages'
    }
];

const ProductGrid = ({ addToCart, wishlist, toggleWishlist, isLoading }) => {
    const [sortBy, setSortBy] = useState('featured');
    const [filterCategory, setFilterCategory] = useState('all');

    const filteredProducts = filterCategory === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });

    return (
        <section id="shop" className="products">
            <div className="products-header">
                <h2 className="section-title">Featured Items</h2>
                <div className="filter-bar">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All Categories</option>
                        <option value="rare books">Rare Books</option>
                        <option value="art prints">Art Prints</option>
                        <option value="ceramics">Ceramics</option>
                        <option value="textiles">Textiles</option>
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
            </div>

            <div className="product-grid">
                {isLoading ? (
                    // Loading skeletons
                    [...Array(6)].map((_, i) => (
                        <div key={i} className="product-card skeleton-card">
                            <div className="skeleton skeleton-image"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div>
                    ))
                ) : (
                    sortedProducts.map(product => (
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
