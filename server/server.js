const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get all quotes
app.get('/api/quotes', (req, res) => {
    db.all('SELECT * FROM quotes', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Process checkout and save order
app.post('/api/checkout', (req, res) => {
    const { cartItems, paymentInfo, total } = req.body;

    if (!cartItems || cartItems.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }

    // Basic mock validation of payment info
    if (!paymentInfo || !paymentInfo.cardNumber || !paymentInfo.expiry || !paymentInfo.cvv) {
        return res.status(400).json({ error: 'Incomplete payment information' });
    }

    // Insert order
    db.run(`INSERT INTO orders (total, status) VALUES (?, ?)`, [total, 'completed'], function (err) {
        if (err) {
            return res.status(500).json({ error: 'Failed to create order' });
        }

        const orderId = this.lastID;

        // Insert order items
        const stmt = db.prepare('INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)');
        let itemsProcessed = 0;

        cartItems.forEach((item) => {
            stmt.run([orderId, item.id, item.quantity, item.price], (err) => {
                if (err) console.error('Failed to insert order item:', err);
                itemsProcessed++;

                if (itemsProcessed === cartItems.length) {
                    stmt.finalize();
                    res.status(201).json({
                        message: 'Order processed successfully (Mock Payment)',
                        orderId: orderId
                    });
                }
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
