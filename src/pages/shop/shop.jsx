import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaEye, FaFilter, FaArrowLeft } from 'react-icons/fa';
import './shop.css';

const productsData = [
  {
    id: 1,
    name: 'قميص كاجوال أنيق',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.5,
    reviewCount: 120,
    isNew: false,
    category: 'رجالي'
  },
  {
    id: 2,
    name: 'فستان أنيق للسهرات',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.8,
    reviewCount: 85,
    isNew: true,
    category: 'نسائي'
  },
  {
    id: 3,
    name: 'حذاء رياضي مريح',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.2,
    reviewCount: 65,
    isNew: false,
    category: 'أحذية'
  },
  {
    id: 4,
    name: 'حقيبة يد فاخرة',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    reviewCount: 42,
    isNew: true,
    category: 'إكسسوارات'
  },
  {
    id: 5,
    name: 'بنطلون جينز عصري',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 249,
    originalPrice: 329,
    discount: 24,
    rating: 4.4,
    reviewCount: 78,
    isNew: false,
    category: 'رجالي'
  },
  {
    id: 6,
    name: 'تيشيرت قطني مريح',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 129,
    originalPrice: 179,
    discount: 28,
    rating: 4.3,
    reviewCount: 56,
    isNew: false,
    category: 'رجالي'
  },
  {
    id: 7,
    name: 'فستان صيفي خفيف',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.6,
    reviewCount: 39,
    isNew: true,
    category: 'نسائي'
  },
  {
    id: 8,
    name: 'ساعة يد أنيقة',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviewCount: 28,
    isNew: false,
    category: 'إكسسوارات'
  }
];

const categories = [
  'الكل',
  'رجالي',
  'نسائي',
  'أحذية',
  'إكسسوارات'
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [activeOverlayId, setActiveOverlayId] = useState(null);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'الكل') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  }, [selectedCategory, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="shop_page_star_icon" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStar key={i} className="shop_page_star_icon" />);
      } else {
        stars.push(<FaRegStar key={i} className="shop_page_star_icon" />);
      }
    }
    return stars;
  };

  return (
    <section className="shop_page_section mb-5">
      <Container>
        <div className="shop_page_header text-center pt-2 pb-5">
          <h2 className="shop_page_title"><span>تسوق الآن</span></h2>
          <p className="shop_page_subtitle">اكتشف أحدث صيحات الموضة والأزياء العصرية بأسعار مناسبة وجودة عالية</p>
        </div>

        <Row>
          <Col lg={3} md={4} className="mb-4">
            <div className="shop_page_filter p-4">
              <h3 className="shop_page_filter_title mb-4">تصفية المنتجات</h3>
              <div className="mb-4">
                <h4 className="shop_page_categories_title mb-3">الفئات</h4>
                <ul className="shop_page_categories_list">
                  {categories.map((category, index) => (
                    <li key={index} className="shop_page_category_item">
                      <button
                        className={`shop_page_category_btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={9} md={8}>
            <Row>
              {currentProducts.map((product) => (
                <Col key={product.id} lg={4} md={6} sm={6} className="mb-4">
                  <Card className="shop_page_product_card">
                    <div className="shop_page_product_img_section position-relative">
                      {product.discount > 0 && (
                        <div className="shop_page_product_badge">
                          خصم {product.discount}%
                        </div>
                      )}
                      {product.isNew && (
                        <div className="shop_page_new_badge">جديد</div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="shop_page_product_img"
                        onClick={() => {
                          if (window.innerWidth <= 575.98) {
                            setActiveOverlayId(activeOverlayId === product.id ? null : product.id);
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      <div 
                        className={`shop_page_product_overlay ${activeOverlayId === product.id ? 'active' : ''}`}
                        onClick={(e) => {
                          if (window.innerWidth <= 575.98) {
                            e.stopPropagation();
                            setActiveOverlayId(null);
                          }
                        }}
                      >
                        <div className="shop_page_overlay_buttons">
                          <button
                            className="shop_page_overlay_btn"
                            title="عرض سريع"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <FaEye />
                          </button>
                          <button
                            className="shop_page_overlay_btn shop_page_overlay_cart_btn"
                            title="أضف للسلة"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <FaShoppingCart />
                          </button>
                          <button
                            className="shop_page_overlay_btn shop_page_overlay_wishlist_btn"
                            title="أضف للمفضلة"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="shop_page_product_details">
                      <Link to="#" className="shop_page_product_title">{product.name}</Link>
                      <p className="shop_page_product_description">{product.name.substring(0, 30)}...</p>
                      <div className="shop_page_product_rating">
                        <div className="shop_page_star_rating">
                          {renderStars(product.rating)}
                        </div>
                        <span className="shop_page_rating_count">({product.reviewCount})</span>
                      </div>
                      <div className="shop_page_product_price">
                        <span className="shop_page_current_price">{product.price} ج.م</span>
                        {product.originalPrice > product.price && (
                          <span className="shop_page_original_price">{product.originalPrice} ج.م</span>
                        )}
                      </div>
                      <div className="shop_page_product_actions">
                        <Button
                          className="shop_page_cart_btn"
                        >
                          <FaShoppingCart className="me-2" />
                          أضف للسلة
                        </Button>
                        <Button
                          className="shop_page_wishlist_btn"
                        >
                          <FaHeart className="me-2" />
                          المفضلة
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {filteredProducts.length > productsPerPage && (
              <div className="shop_page_pagination d-flex justify-content-center">
                <Pagination>
                  <Pagination.Prev
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  />
                  {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                    <Pagination.Item
                      key={number + 1}
                      active={number + 1 === currentPage}
                      onClick={() => paginate(number + 1)}
                    >
                      {number + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
                    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                  />
                </Pagination>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Shop;