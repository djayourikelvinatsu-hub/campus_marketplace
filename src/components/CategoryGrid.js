import React from 'react';
import './CategoryGrid.css';

const categories = [
    { name: 'Rare Books', icon: '📚', description: 'First editions & philosophical texts' },
    { name: 'Art Prints', icon: '🎨', description: 'Mediterranean inspired art' },
    { name: 'Ceramics', icon: '🏺', description: 'Handmade Algerian pottery' },
    { name: 'Textiles', icon: '🧣', description: 'Linen & olive wood items' }
];

const CategoryGrid = () => {
    return (
        <section className="categories">
            <h2 className="section-title">The Absurdist's Collection</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <button className="category-btn">Explore →</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
