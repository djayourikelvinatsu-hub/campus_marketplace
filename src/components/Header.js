import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import './Header.css';

const Header = ({ cartCount, toggleDarkMode, isDarkMode, onCartClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'About Camus', path: '/about' },
        { label: 'Journal', path: '/journal' },
        { label: 'Contact', path: '/contact' }
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
                                <Link to={item.path} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    {item.label}
                                </Link>
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
                    <CartIcon count={cartCount} onClick={onCartClick} />
                </div>
            </div>
        </header>
    );
};

export default Header;
