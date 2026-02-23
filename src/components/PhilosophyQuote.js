import React from 'react';
import './PhilosophyQuote.css';

const PhilosophyQuote = () => {
    return (
        <section id="about" className="philosophy-section">
            <div className="philosophy-container">
                <div className="philosophy-quote">
                    <span className="quote-mark">"</span>
                    <p className="philosophy-text">
                        The absurd is the essential concept and the first truth.
                        It reveals itself in the confrontation between the human need
                        for meaning and the unreasonable silence of the world.
                    </p>
                    <span className="quote-mark closing">"</span>
                </div>
                <div className="philosophy-decoration">
                    <div className="philosophy-line"></div>
                    <p className="philosophy-reflection">
                        Find meaning in the meaningless through our curated collection
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhilosophyQuote;
