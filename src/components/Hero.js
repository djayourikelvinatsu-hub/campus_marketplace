import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <div className="hero-quote">
                    <blockquote>
                        "The best place to buy, sell, and trade textbooks, electronics, and dorm essentials."
                    </blockquote>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
