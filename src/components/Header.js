import React, { useState } from 'react';
import CartIcon from './CartIcon';
import './Header.css';

const Header = ({ cartCount, toggleDarkMode, isDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Shop', id: 'shop' },
        { label: 'About Camus', id: 'about' },
        { label: 'Journal', id: 'journal' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <h1>The Absurd Marketplace</h1>
                    <span className="logo-subtitle">The Stranger Marketplace</span>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href={`#${item.id}`} className="nav-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <CartIcon count={cartCount} />
                </div>
            </div>
        </header>
    );
};

export default Header;
