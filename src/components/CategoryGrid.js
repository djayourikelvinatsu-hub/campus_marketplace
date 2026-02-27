import React from 'react';
import './CategoryGrid.css';

const categories = [
    { name: 'Textbooks', icon: '📚', description: 'Used course materials' },
    { name: 'Electronics', icon: '💻', description: 'Laptops, headphones, & calculators' },
    { name: 'Furniture', icon: '🪑', description: 'Dorm room essentials' },
    { name: 'Supplies', icon: '✏️', description: 'Stationery & desk accessories' }
];

const CategoryGrid = ({ onCategoryClick }) => {
    return (
        <section className="categories">
            <h2 className="section-title">Shop by Category</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <button
                            className="category-btn"
                            onClick={() => onCategoryClick(category.name.toLowerCase())}
                        >
                            Explore →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
