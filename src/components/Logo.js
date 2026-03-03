import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="brand-logo">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="logo-icon"
            >
                {/* Outer Shield */}
                <path d="M 15 15 L 85 15 L 85 50 C 85 75 50 95 50 95 C 50 95 15 75 15 50 Z"
                    fill="var(--deep-blue)"
                    className="logo-shield"
                />

                {/* Inner Border */}
                <path d="M 22 22 L 78 22 L 78 48 C 78 68 50 85 50 85 C 50 85 22 68 22 48 Z"
                    fill="none"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                    className="logo-border"
                />

                {/* Star / Sun */}
                <path d="M 50 25 L 53 32 L 60 32 L 54 36 L 56 43 L 50 39 L 44 43 L 46 36 L 40 32 L 47 32 Z" fill="var(--terracotta)" className="logo-star" />

                {/* Open Book */}
                <path d="M 33 65 L 50 63 L 67 65 V 45 L 50 42 L 33 45 Z" fill="var(--cream)" />
                <path d="M 50 42 V 63" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
                <path d="M 37 50 L 46 48" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
                <path d="M 37 55 L 46 53" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
                <path d="M 54 48 L 63 50" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
                <path d="M 54 53 L 63 55" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
            </svg>
            <div className="logo-text-container">
                <span className="logo-title">CAMPUS</span>
                <span className="logo-subtitle-new">MARKETPLACE</span>
            </div>
        </div>
    );
};

export default Logo;
