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
                        ['Philosophy Journal - Linen Bound', 45, 'Textiles', 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Hand-bound journal with blank pages'],
                        ['Existentialist Coffee Mug', 22, 'Ceramics', 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Matte black mug for your morning despair'],
                        ['Nietzsche "Amor Fati" Hoodie', 60, 'Apparel', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Embroidered heavy cotton hoodie'],
                        ['Sartre "No Exit" Tote Bag', 28, 'Apparel', 'https://images.unsplash.com/photo-1597520408226-95bde2056942?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Eco-friendly canvas tote for your books'],
                        ['Brass Bookmark Collection', 35, 'Stationery', 'https://images.unsplash.com/photo-1588691515286-6ba12d7b43a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Three brass bookmarks with philosophical engravings'],
                        ['Fountain Pen - Midnight Blue', 110, 'Stationery', 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Classic writing instrument for journaling'],
                        ['Kierkegaard Leap of Faith Poster', 40, 'Art Prints', 'https://images.unsplash.com/photo-1518998053401-a47781b0fce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Minimalist typography 18x24 print'],
                        ['Dostoevsky Complete Works volume', 175, 'Rare Books', 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Leather-bound omnibus edition'],
                        ['Wool Overcoat - The Thinker', 250, 'Apparel', 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Classic Parisian winter coat'],
                        ['Simone de Beauvoir Desk Plaque', 55, 'Ceramics', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Inspirational desk weight'],
                        ['The Stranger - First Edition', 500, 'Rare Books', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '1942 first edition with original dust jacket'],
                        ['Thus Spoke Zarathustra', 300, 'Rare Books', 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Leather-bound philosophical classic'],
                        ['Hand-painted Absurdist Vase', 120, 'Ceramics', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Abstract geometric ceramic piece'],
                        ['Rustic Clay Pitcher', 90, 'Ceramics', 'https://images.unsplash.com/photo-1596205891392-563b7858cbe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Handmade terracotta water pitcher'],
                        ['Sisyphus Abstract Lithograph', 150, 'Art Prints', 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Limited edition lithograph illustrating the struggle'],
                        ['Algiers Cityscape Canvas', 200, 'Art Prints', 'https://images.unsplash.com/photo-1578308432360-1e5b1ab5378c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Oil painting of the Mediterranean coast'],
                        ['Merino Wool Throw Blanket', 110, 'Textiles', 'https://images.unsplash.com/photo-1580870059877-334338575a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Heavy warm blanket for reading sessions'],
                        ['Linen Minimalist Tote', 35, 'Textiles', 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 'Undyed natural linen carrier bag']
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
