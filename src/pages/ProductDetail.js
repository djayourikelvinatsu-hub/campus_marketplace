import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ addToCart, wishlist, toggleWishlist }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch product", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading-container">Contemplating existence...</div>;
    if (!product) return <div className="error-container">The item you seek does not exist. (404)</div>;

    const isWishlisted = wishlist.includes(product.id);

    return (
        <div className="product-detail-page container">
            <Link to="/shop" className="back-link">← Back to Shop</Link>

            <div className="product-detail-grid">
                <div className="detail-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="detail-info">
                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-name">{product.name}</h1>
                    <p className="detail-price">${product.price.toFixed(2)}</p>
                    <p className="detail-description">{product.description}</p>

                    <div className="detail-actions">
                        <button
                            className="add-to-cart-btn large"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                        <button
                            className={`wishlist-icon large ${isWishlisted ? 'active' : ''}`}
                            onClick={() => toggleWishlist(product.id)}
                            aria-label="Toggle wishlist"
                        >
                            {isWishlisted ? '❤️' : '🤍'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
