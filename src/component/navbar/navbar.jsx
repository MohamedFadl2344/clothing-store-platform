import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Top Bar - Desktop */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="ابحث عن منتج..." 
                className="search-input"
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
            <div className="top-actions">
              <Link to="/account" className="account-btn" aria-label="حسابي">
                <FaUser />
              </Link>
              <Link to="/cart" className="cart-btn" aria-label="سلة التسوق">
                <FaShoppingCart />
                <span className="cart-count">0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <div className="navbar-header">
              {/* Mobile menu button */}
              <div className="mobile-actions-container">
                <button 
                  className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
                  onClick={toggleMenu}
                  aria-label="القائمة"
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                
                {/* Mobile Icons */}
                <div className="mobile-actions">
                  <Link to="/account" className="account-btn" aria-label="حسابي">
                    <FaUser />
                  </Link>
                  <Link to="/cart" className="cart-btn" aria-label="سلة التسوق">
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                  </Link>
                </div>
              </div>
              
              {/* Logo */}
              <Link to="/" className="logo" onClick={closeMenu}>
                <span>متجر الأزياء</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              {/* Mobile Search Box */}
              <div className="mobile-search-box">
                <input 
                  type="text" 
                  placeholder="ابحث عن منتج..." 
                  className="search-input"
                />
                <button className="search-btn">
                  <FaSearch />
                </button>
              </div>
              
              <ul>
                <li><Link to="/" onClick={closeMenu}>الرئيسية</Link></li>
                <li><Link to="/shop" onClick={closeMenu}>المتجر</Link></li>
                <li><Link to="/categories" onClick={closeMenu}>الأقسام</Link></li>
                <li><Link to="/new-arrivals" onClick={closeMenu}>وصل حديثاً</Link></li>
                <li><Link to="/sale" onClick={closeMenu}>تخفيضات</Link></li>
                <li><Link to="/about" onClick={closeMenu}>من نحن</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>اتصل بنا</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="navbar-bottom-bar">
        <div className="navbar-bottom-content">
          <Link to="/" className="navbar-bottom-item">
            <i className="fas fa-home"></i>
            <span>الرئيسية</span>
          </Link>
          <Link to="/categories" className="navbar-bottom-item">
            <i className="fas fa-th-large"></i>
            <span>الأقسام</span>
          </Link>
          <Link to="/cart" className="navbar-bottom-item">
            <i className="fas fa-shopping-cart"></i>
            <span>السلة</span>
          </Link>
          <Link to="/account" className="navbar-bottom-item">
            <i className="fas fa-user"></i>
            <span>حسابي</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;