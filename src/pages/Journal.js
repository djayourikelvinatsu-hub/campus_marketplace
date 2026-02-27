import React from 'react';
import QuoteGenerator from '../components/QuoteGenerator';
import './Journal.css';

const Journal = () => {
    return (
        <div className="journal-page container">
            <h2 className="section-title">The Absurdist Journal</h2>
            <div className="journal-content">
                <p className="journal-intro">
                    Welcome to the central repository of existential thought. Uncover random insights
                    from history's most prominent existential and absurdist thinkers.
                </p>
                <QuoteGenerator />
            </div>
        </div>
    );
};

export default Journal;
