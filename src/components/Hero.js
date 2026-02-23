import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <div className="hero-quote">
                    <blockquote>
                        "In the midst of winter, I found there was, within me, an invincible summer."
                    </blockquote>
                    <cite>- Albert Camus</cite>
                </div>
                <div className="hero-decoration">
                    <svg className="olive-branch" viewBox="0 0 100 100">
                        <path
                            d="M20,50 Q40,30 60,50 Q80,70 50,80"
                            fill="none"
                            stroke="var(--olive)"
                            strokeWidth="2"
                        />
                        <circle cx="30" cy="45" r="3" fill="var(--olive)" />
                        <circle cx="45" cy="40" r="3" fill="var(--olive)" />
                        <circle cx="60" cy="45" r="3" fill="var(--olive)" />
                    </svg>
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
