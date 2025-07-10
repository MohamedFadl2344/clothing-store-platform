import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './popular.css';

const Popular = () => {
  const [products] = useState([
   
    [
      {
        id: 1,
        name: 'قميص رجالي كلاسيكي',
        price: 199.99,
        oldPrice: 299.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'ملابس رجالية',
        colors: ['#2c3e50', '#e74c3c', '#3498db'],
        isNew: true,
        isOnSale: true,
      },
      {
        id: 2,
        name: 'فستان سهرة أسود',
        price: 349.99,
        oldPrice: 499.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'فساتين سهرة',
        colors: ['#000000', '#8e44ad', '#c0392b'],
        isNew: true,
      },
      {
        id: 3,
        name: 'حذاء رياضي أبيض',
        price: 249.99,
        oldPrice: 349.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'أحذية رياضية',
        colors: ['#ffffff', '#f1f1f1', '#e0e0e0'],
        isOnSale: true,
      },
      {
        id: 4,
        name: 'ساعة يد ذكية',
        price: 599.99,
        oldPrice: 799.99,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'إكسسوارات',
        colors: ['#2c3e50', '#34495e', '#7f8c8d'],
        isNew: true,
      }
    ],
   
    [
      {
        id: 5,
        name: 'حقيبة يد جلدية',
        price: 199.99,
        oldPrice: 299.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'حقائب',
        colors: ['#8B4513', '#A0522D', '#D2B48C'],
        isOnSale: true,
      },
      {
        id: 6,
        name: 'نظارة شمسية كلاسيكية',
        price: 149.99,
        oldPrice: 199.99,
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        category: 'نظارات',
        colors: ['#000000', '#2c3e50', '#7f8c8d'],
        isNew: true,
      },
      {
        id: 7,
        name: 'قميص نسائي أنيق',
        price: 179.99,
        oldPrice: 249.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
        category: 'ملابس نسائية',
        colors: ['#e74c3c', '#3498db', '#9b59b6'],
        isOnSale: true,
      },
      {
        id: 8,
        name: 'حذاء كاجوال',
        price: 229.99,
        oldPrice: 299.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
        category: 'أحذية',
        colors: ['#2c3e50', '#7f8c8d', '#bdc3c7'],
        isNew: true,
      }
    ]
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const filterProducts = (productsRow) => {
    return productsRow.filter(product => 
      activeFilter === 'all' || product.category.includes(activeFilter)
    );
  };

  const filteredProducts = products.map(row => filterProducts(row));

  return (
    <section id="popular-products" className="popular-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">المنتجات الأكثر مبيعاً</h2>
          <p className="section-subtitle">اكتشف أحدث صيحات الموضة والأكثر طلباً</p>
          
          <div className="filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ملابس رجالية' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ملابس رجالية')}
            >
              ملابس رجالية
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'فساتين سهرة' ? 'active' : ''}`}
              onClick={() => setActiveFilter('فساتين سهرة')}
            >
              فساتين سهرة
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'أحذية رياضية' ? 'active' : ''}`}
              onClick={() => setActiveFilter('أحذية رياضية')}
            >
              أحذية رياضية
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'إكسسوارات' ? 'active' : ''}`}
              onClick={() => setActiveFilter('إكسسوارات')}
            >
              إكسسوارات
            </button>
          </div>
        </div>

        <div className="products-container">
          {filteredProducts.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="products-row">
              {row.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-badges">
                    {product.isNew && <span className="badge new">جديد</span>}
                    {product.isOnSale && <span className="badge sale">خصم</span>}
                  </div>
                  
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-actions">
                      <button className="action-btn" aria-label="إضافة إلى المفضلة">
                        <FaHeart />
                      </button>
                      <button className="action-btn" aria-label="معاينة سريعة">
                        <FaEye />
                      </button>
                      <button className="action-btn" aria-label="مقارنة">
                        <FaExchangeAlt />
                      </button>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(product.rating) ? 'filled' : ''} 
                        />
                      ))}
                      <span className="rating-count">({product.rating})</span>
                    </div>
                    
                    <h3 className="product-title">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    
                    <div className="product-colors">
                      {product.colors.map((color, i) => (
                        <span 
                          key={i} 
                          className="color-option" 
                          style={{ backgroundColor: color }}
                          aria-label={`لون ${i + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="product-price">
                      <span className="current-price">{product.price} ر.س</span>
                      {product.oldPrice && (
                        <span className="old-price">{product.oldPrice} ر.س</span>
                      )}
                    </div>
                  </div>
                  
                  <button className="add-to-cart-btn">
                    <span>أضف إلى السلة</span>
                    <FaShoppingCart className="ms-2" />
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/shop" className="view-all-btn">
            عرض الكل
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular;