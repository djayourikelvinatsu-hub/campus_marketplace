import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <h2 className="section-title">Reach the Void</h2>
            <div className="contact-content">
                <p>Have an inquiry about an order? Need to discuss the futility of existence?</p>
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent into the abyss."); }}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required placeholder="Meursault" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required placeholder="stranger@algier.com" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" required placeholder="Why must I push this boulder?"></textarea>
                    </div>
                    <button type="submit" className="submit-btn" style={{ marginTop: '1rem' }}>Send Mail</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
