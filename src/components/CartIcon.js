import React from 'react';
import PropTypes from 'prop-types';
import './CartIcon.css';

const CartIcon = ({ count, onClick }) => {
    return (
        <button className="cart-icon-container" onClick={onClick} aria-label="Open cart" style={{ background: 'none', border: 'none' }}>
            <svg className="cart-icon" viewBox="0 0 24 24">
                <path
                    d="M6 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 4h16l-2 8H6L4 4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
            {count > 0 && <span className="cart-count">{count}</span>}
        </button>
    );
};

CartIcon.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default CartIcon;
