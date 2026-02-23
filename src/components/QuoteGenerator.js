import React, { useState } from 'react';
import './QuoteGenerator.css';

const quotes = [
    { text: "You will never be happy if you continue to search for what happiness consists of.", source: "The Myth of Sisyphus" },
    { text: "Should I kill myself, or have a cup of coffee?", source: "Notebooks" },
    { text: "Nobody realizes that some people expend tremendous energy merely to be normal.", source: "Notebooks" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", source: "The Rebel" },
    { text: "I opened myself to the gentle indifference of the world.", source: "The Stranger" }
];

const QuoteGenerator = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    return (
        <div id="journal" className="quote-generator">
            <div className="quote-content">
                <p className="quote-text">"{currentQuote.text}"</p>
                <p className="quote-source">— {currentQuote.source}</p>
            </div>
            <button onClick={generateQuote} className="quote-btn">
                <span>Find Another Truth</span>
                <span className="quote-icon">↻</span>
            </button>
        </div>
    );
};

export default QuoteGenerator;
