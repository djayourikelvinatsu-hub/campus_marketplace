const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'marketplace.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.serialize(() => {
            // Create tables
            db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        category TEXT,
        image TEXT,
        description TEXT
      )`);

            db.run(`CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        source TEXT
      )`);

            db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        total REAL,
        status TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);

            db.run(`CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        product_id INTEGER,
        quantity INTEGER,
        price REAL,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      )`);

            // Seed data if empty
            db.get('SELECT count(*) as count FROM products', (err, row) => {
                if (row.count === 0) {
                    console.log('Seeding products...');
                    const stmt = db.prepare('INSERT INTO products (name, price, category, image, description) VALUES (?, ?, ?, ?, ?)');
                    const products = [
                        ['The Myth of Sisyphus - First Edition', 450, 'Rare Books', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '1942 first edition, original French text'],
                        ['Algerian Olive Wood Bowl', 85, 'Ceramics', 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Hand-carved by artisans in Tipaza'],
                        ['Mediterranean Linen Scarf', 65, 'Textiles', 'https://images.unsplash.com/photo-1584030373081-f37b7a8a3b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Hand-dyed with natural pigments'],
                        ['Camus Philosophy Prints Set', 120, 'Art Prints', 'https://images.unsplash.com/photo-1579783902614-a3fb2367d3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Set of 3 abstract prints with quotes'],
                        ['The Stranger - Annotated Copy', 95, 'Rare Books', 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '1946 first American edition with critical essays'],
                        ['Philosophy Journal - Linen Bound', 45, 'Textiles', 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Hand-bound journal with blank pages']
                    ];
                    products.forEach(p => stmt.run(p));
                    stmt.finalize();
                }
            });

            db.get('SELECT count(*) as count FROM quotes', (err, row) => {
                if (row.count === 0) {
                    console.log('Seeding quotes...');
                    const stmt = db.prepare('INSERT INTO quotes (text, source) VALUES (?, ?)');
                    const quotes = [
                        ["You will never be happy if you continue to search for what happiness consists of.", "The Myth of Sisyphus"],
                        ["Should I kill myself, or have a cup of coffee?", "Notebooks"],
                        ["Nobody realizes that some people expend tremendous energy merely to be normal.", "Notebooks"],
                        ["The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", "The Rebel"],
                        ["I opened myself to the gentle indifference of the world.", "The Stranger"]
                    ];
                    quotes.forEach(q => stmt.run(q));
                    stmt.finalize();
                }
            });
        });
    }
});

module.exports = db;
