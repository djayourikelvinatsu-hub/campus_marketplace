import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/quotes')
            .then(res => res.json())
            .then(data => {
                setQuotes(data);
                if (data.length > 0) {
                    setCurrentQuote(data[0]);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch quotes:", err);
                setIsLoading(false);
            });
    }, []);

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    if (isLoading || !currentQuote) {
        return (
            <div id="journal" className="quote-generator">
                <div className="quote-content">
                    <p className="quote-text">Loading wisdom...</p>
                </div>
            </div>
        );
    }

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
