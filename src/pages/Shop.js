import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Shop = ({ addToCart, wishlist, toggleWishlist, isLoading, activeCategory, setActiveCategory }) => {
    return (
        <div className="shop-page container">
            <ProductGrid
                addToCart={addToCart}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                isLoading={isLoading}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
        </div>
    );
};

export default Shop;
