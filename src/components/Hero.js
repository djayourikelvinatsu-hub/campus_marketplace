import React, { useState, useEffect } from 'react';
import './Hero.css';

const welcomeMessages = [
    "The best place to buy, sell, and trade textbooks, electronics, and dorm essentials.",
    "Welcome to Campus Marketplace! Find everything you need for the semester.",
    "Your one-stop shop for campus living. Books, tech, and more.",
    "Join your fellow students in buying and selling essentials.",
    "Discover great deals on textbooks and dorm gear today.",
    "New semester, new gear! Start exploring the marketplace.",
    "Connect with other students and save money on your supplies."
];

const Hero = () => {
    const [message, setMessage] = useState(welcomeMessages[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
        setMessage(welcomeMessages[randomIndex]);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <div className="hero-quote">
                    <blockquote>
                        "{message}"
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
