import React, { useState } from 'react';
import './CartModal.css';

const CartModal = ({ isOpen, onClose, cartItems, updateQuantity, onCheckout }) => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvv: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartItems,
                    paymentInfo: formData,
                    total
                })
            });

            if (response.ok) {
                // If the backend processed it successfully, alert and call onCheckout to clean up
                const data = await response.json();
                onCheckout(data);
            } else {
                const errorData = await response.json();
                alert(`Checkout failed: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Checkout error", error);
            alert("Checkout failed due to a network error.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <div className="cart-modal-header">
                    <h2>Your Absurdist Cart</h2>
                    <button className="close-btn" onClick={onClose} aria-label="Close cart">×</button>
                </div>

                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart-msg">Your cart is as empty as the universe's inherent meaning.</p>
                    ) : (
                        <>
                            <div className="cart-items-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p className="cart-item-price">${item.price}</p>
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <h3>Total: ${total.toFixed(2)}</h3>
                            </div>

                            <div className="checkout-section">
                                <h3>Checkout (Mock Payment)</h3>
                                <form onSubmit={handlePaymentSubmit} className="payment-form">
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Existential Card Number"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            name="expiry"
                                            placeholder="MM/YY"
                                            value={formData.expiry}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="checkout-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Processing...' : 'Confirm Purchase'}
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
