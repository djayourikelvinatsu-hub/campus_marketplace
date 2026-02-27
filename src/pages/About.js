import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page container">
            <h2 className="section-title">About the Absurd</h2>
            <div className="about-content">
                <p>
                    <strong>Le Marché d'Absurdité</strong> was born out of a profound confrontation with the meaningless
                    nature of existence — and the realization that one might still enjoy a nice cup of coffee and a good book.
                </p>
                <br />
                <p>
                    Inspired by Albert Camus, Jean-Paul Sartre, and Søren Kierkegaard, we source and curate artifacts
                    that remind us to embrace our freedom. Whether it's the weight of a heavy winter coat (perfect for
                    gazing across the Seine) or a ceramic mug that holds the dark roast of despair, our items are tools
                    for the modern rebel.
                </p>
            </div>
        </div>
    );
};

export default About;
