import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Journal from './pages/Journal';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Scroll to the shop section
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
      return;
    }
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleCheckout = (data) => {
    alert(data?.message || "Thank you for your Absurdist purchase! (Mock Payment Successful)");
    setCartItems([]);
    setIsCartOpen(false);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Router>
      <div className="app">
        <Header
          cartCount={getCartCount()}
          onCartClick={() => setIsCartOpen(true)}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <main>
          <Routes>
            <Route path="/" element={
              <Home
                onCategoryClick={handleCategoryClick}
                addToCart={addToCart}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                isLoading={isLoading}
              />
            } />
            <Route path="/shop" element={
              <Shop
                addToCart={addToCart}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                isLoading={isLoading}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            } />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={
              <ProductDetail addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
            } />
          </Routes>
        </main>
        <Footer />

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          updateQuantity={updateCartItemQuantity}
          onCheckout={handleCheckout}
        />
      </div>
    </Router>
  );
};

export default App;
