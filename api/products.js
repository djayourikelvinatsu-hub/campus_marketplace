// Vercel Serverless Function to serve products
const products = [
    { id: 1, name: 'The Myth of Sisyphus - First Edition', price: 450, category: 'Rare Books', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: '1942 first edition, original French text' },
    { id: 2, name: 'Algerian Olive Wood Bowl', price: 85, category: 'Ceramics', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Hand-carved by artisans in Tipaza' },
    { id: 3, name: 'Mediterranean Linen Scarf', price: 65, category: 'Textiles', image: 'https://images.unsplash.com/photo-1584030373081-f37b7a8a3b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Hand-dyed with natural pigments' },
    { id: 4, name: 'Camus Philosophy Prints Set', price: 120, category: 'Art Prints', image: 'https://images.unsplash.com/photo-1579783902614-a3fb2367d3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Set of 3 abstract prints with quotes' },
    { id: 5, name: 'The Stranger - Annotated Copy', price: 95, category: 'Rare Books', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: '1946 first American edition with critical essays' },
    { id: 6, name: 'Philosophy Journal - Linen Bound', price: 45, category: 'Textiles', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Hand-bound journal with blank pages' },
    { id: 7, name: 'Existentialist Coffee Mug', price: 22, category: 'Ceramics', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Matte black mug for your morning despair' },
    { id: 8, name: 'Nietzsche "Amor Fati" Hoodie', price: 60, category: 'Apparel', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Embroidered heavy cotton hoodie' },
    { id: 9, name: 'Sartre "No Exit" Tote Bag', price: 28, category: 'Apparel', image: 'https://images.unsplash.com/photo-1597520408226-95bde2056942?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Eco-friendly canvas tote for your books' },
    { id: 10, name: 'Brass Bookmark Collection', price: 35, category: 'Stationery', image: 'https://images.unsplash.com/photo-1588691515286-6ba12d7b43a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Three brass bookmarks with philosophical engravings' },
    { id: 11, name: 'Fountain Pen - Midnight Blue', price: 110, category: 'Stationery', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Classic writing instrument for journaling' },
    { id: 12, name: 'Kierkegaard Leap of Faith Poster', price: 40, category: 'Art Prints', image: 'https://images.unsplash.com/photo-1518998053401-a47781b0fce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Minimalist typography 18x24 print' },
    { id: 13, name: 'Dostoevsky Complete Works volume', price: 175, category: 'Rare Books', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Leather-bound omnibus edition' },
    { id: 14, name: 'Wool Overcoat - The Thinker', price: 250, category: 'Apparel', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Classic Parisian winter coat' },
    { id: 15, name: 'Simone de Beauvoir Desk Plaque', price: 55, category: 'Ceramics', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Inspirational desk weight' }
];

export default function handler(req, res) {
    res.status(200).json(products);
}
