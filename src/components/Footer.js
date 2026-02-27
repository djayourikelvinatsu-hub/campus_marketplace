import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! You have embraced the absurdity of newsletter subscriptions.');
        setEmail('');
    };

    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>The Absurd Marketplace</h3>
                    <p className="footer-philosophy">
                        "The struggle itself towards the heights is enough to fill a man's heart.
                        One must imagine Sisyphus happy — and shopping."
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Navigate the Absurd</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About Camus</a></li>
                        <li><a href="#journal">Philosophical Journal</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Embrace the News</h4>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="social-links">
                        <a href="#instagram" aria-label="Instagram">📷</a>
                        <a href="#twitter" aria-label="Twitter">🐦</a>
                        <a href="#facebook" aria-label="Facebook">📘</a>
                        <a href="#blog" aria-label="Philosophy Blog">✍️</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        © 2024 The Absurd Marketplace - Embracing the indifference of the universe, one item at a time.
                    </p>
                    <p className="existential-note">
                        "There is no love of life without despair of life." — Be assured, we accept returns.
                    </p>
                    <p className="built-by" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                        Built by KAD
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
