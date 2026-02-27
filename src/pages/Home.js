import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import PhilosophyQuote from '../components/PhilosophyQuote';
import ProductGrid from '../components/ProductGrid';

const Home = ({ onCategoryClick, addToCart, wishlist, toggleWishlist, isLoading }) => {
    return (
        <div className="home-page">
            <Hero />
            <div className="container">
                <CategoryGrid onCategoryClick={onCategoryClick} />
                <ProductGrid
                    addToCart={addToCart}
                    wishlist={wishlist}
                    toggleWishlist={toggleWishlist}
                    isLoading={isLoading}
                    activeCategory="all"
                    previewLimit={6}
                    hideFilters={true}
                />
                <PhilosophyQuote />
            </div>
        </div>
    );
};

export default Home;
