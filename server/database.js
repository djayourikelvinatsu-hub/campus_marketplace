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
                        ['Calculus: Early Transcendentals (9th Edition)', 85, 'Textbooks', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Gently used math textbook. No highlighting inside.'],
                        ['Introduction to Algorithms (4th Edition)', 65, 'Textbooks', 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Like new, hardcover edition.'],
                        ['Sony WH-1000XM4 Noise Canceling Headphones', 180, 'Electronics', 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Used for one semester. Great for studying in the library.'],
                        ['Texas Instruments TI-84 Plus CE Graphing Calculator', 90, 'Electronics', 'https://images.unsplash.com/photo-1587145820266-a5951ee6b63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Fully functional, includes charging cable.'],
                        ['Midea 3.1 Cu. Ft. Compact Refrigerator', 75, 'Furniture', 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Perfect size for a dorm room. Cleaned and sanitized.'],
                        ['Adjustable Office Desk Chair', 40, 'Furniture', 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Ergonomic mesh chair. Pick up only.'],
                        ['Chemistry: The Central Science', 55, 'Textbooks', 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Some wear on the cover, pages are intact.'],
                        ['Apple iPad Air (4th Gen) 64GB', 320, 'Electronics', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Slight scratch on the back, screen is perfect.'],
                        ['LED Desk Lamp with USB Charging Port', 15, 'Supplies', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Dims and changes color temperature.'],
                        ['Microbiology An Introduction', 45, 'Textbooks', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Paperback, some highlighting in chapters 1-4.'],
                        ['Set of 4 Dorm Bed Risers', 10, 'Furniture', 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Adds 6 inches of height for under-bed storage.']
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
                        ["You will never be happy if you continue to search for what happiness consists of.", "Albert Camus, The Myth of Sisyphus"],
                        ["Should I kill myself, or have a cup of coffee?", "Albert Camus, Notebooks"],
                        ["Nobody realizes that some people expend tremendous energy merely to be normal.", "Albert Camus, Notebooks"],
                        ["The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", "Albert Camus, The Rebel"],
                        ["I opened myself to the gentle indifference of the world.", "Albert Camus, The Stranger"],
                        ["Hell is other people.", "Jean-Paul Sartre, No Exit"],
                        ["Man is condemned to be free.", "Jean-Paul Sartre, Being and Nothingness"],
                        ["He who has a why to live for can bear almost any how.", "Friedrich Nietzsche, Twilight of the Idols"],
                        ["God is dead. God remains dead. And we have killed him.", "Friedrich Nietzsche, The Gay Science"],
                        ["To dare is to lose one's footing momentarily. Not to dare is to lose oneself.", "Søren Kierkegaard"],
                        ["Life can only be understood backwards; but it must be lived forwards.", "Søren Kierkegaard"],
                        ["One is not born, but rather becomes, a woman.", "Simone de Beauvoir, The Second Sex"],
                        ["Pain and suffering are always inevitable for a large intelligence and a deep heart.", "Fyodor Dostoevsky, Crime and Punishment"]
                    ];
                    quotes.forEach(q => stmt.run(q));
                    stmt.finalize();
                }
            });
        });
    }
});

module.exports = db;
