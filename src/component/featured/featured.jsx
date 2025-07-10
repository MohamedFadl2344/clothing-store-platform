import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaArrowLeft } from 'react-icons/fa';
import './featured.css';

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredProducts = [
    {
      id: 1,
      name: 'فستان مطرز أنيق',
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true,
      discount: 25,
      description: 'فستان أنيق بتطريز يدوي فاخر، مناسب للمناسبات الرسمية والسهرات.'
    },
    {
      id: 2,
      name: 'جاكيت جلد طبيعي',
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true,
      discount: 25,
      description: 'جاكيت جلد طبيعي عالي الجودة، يوفر الدفء والأناقة في نفس الوقت.'
    },
    {
      id: 3,
      name: 'بلوزة حرير كلاسيكية',
      price: 349.99,
      originalPrice: 499.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: false,
      discount: 30,
      description: 'بلوزة أنيقة من الحرير الطبيعي، مريحة وعصرية.'
    },
    {
      id: 4,
      name: 'بنطلون جينز ضيق',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: false,
      discount: 25,
      description: 'بنطلون جينز ضيق مريح وعصري، يناسب جميع المناسبات.'
    },
  ];
  
  const displayedProducts = showAll ? featuredProducts : featuredProducts.slice(0, 4);

  return (
    <section className="featured-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5 position-relative">
          <h2 className="section-title position-relative d-inline-block">
            <span className="position-relative z-index-1">منتجات مميزة</span>
          </h2>
          <p className="section-subtitle mt-3">اكتشف تشكيلتنا الحصرية من المنتجات المميزة</p>
        </div>
        
        <div className="row g-4">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card h-100">
                <div className="position-relative">
                  {product.discount > 0 && (
                    <div className="product-badge">
                      خصم {product.discount}%
                    </div>
                  )}
                  {product.isNew && <div className="new-badge">جديد</div>}
                  <div className="product-image position-relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="img-fluid w-100"
                      style={{
                        height: '300px',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div className="product-overlay d-flex align-items-center justify-content-center">
                      <div className="text-center">
                        <button className="btn btn-outline-light btn-sm mb-2 px-3">
                          <FaEye className="ms-1" /> عرض سريع
                        </button>
                        <button className="btn btn-outline-light btn-sm px-3">
                          <FaShoppingCart className="ms-1" /> أضف للسلة
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-details p-3">
                  <h3 className="product-title fw-bold mb-2">{product.name}</h3>
                  <p className="text-muted small mb-3">{product.description}</p>
                  <div className="product-price mb-2">
                    <span className="current-price fw-bold fs-5 text-primary">
                      {product.price.toFixed(2)} ر.س
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="original-price text-muted text-decoration-line-through ms-2">
                        {product.originalPrice.toFixed(2)} ر.س
                      </span>
                    )}
                  </div>
                  <div className="product-rating d-flex align-items-center">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`star-icon ${i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <span className="rating-count text-muted small ms-2">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="product-actions mt-3">
                    <button className="btn btn-primary btn-sm w-100 mb-2 d-flex align-items-center justify-content-center">
                      <FaShoppingCart className="ms-1" /> أضف للسلة
                    </button>
                    <button className="btn btn-outline-secondary btn-sm w-100 d-flex align-items-center justify-content-center">
                      <FaHeart className="ms-1" /> المفضلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="view-more-btn position-relative overflow-hidden px-5 py-3"
          >
            <span className="position-relative z-index-1 d-flex align-items-center justify-content-center">
              {showAll ? 'عرض عدد أقل' : 'عرض المزيد من المنتجات'}
              <FaArrowLeft className="ms-2" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;