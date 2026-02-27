import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = React.memo(({ product, addToCart, isWishlisted, toggleWishlist }) => {
    const { id, name, price, category, image, description } = product;

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/product/${id}`}>
                    <img
                        src={image}
                        alt={name}
                        className="product-image"
                        loading="lazy"
                    />
                </Link>
                <button
                    className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={() => toggleWishlist(id)}
                    aria-label="Add to wishlist"
                >
                    ♥
                </button>
                <span className="product-category">{category}</span>
            </div>

            <div className="product-info">
                <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name">{name}</h3>
                </Link>
                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <span className="product-price">${price}</span>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
});

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    isWishlisted: PropTypes.bool.isRequired,
    toggleWishlist: PropTypes.func.isRequired
};

export default ProductCard;
