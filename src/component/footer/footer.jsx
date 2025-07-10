import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Scroll to top functionality
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      <button 
        type="button" 
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="الانتقال إلى الأعلى"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      
      <footer id="main-footer"  className="footer-section" style={{ direction: 'rtl', textAlign: 'right' }}>
      {/* Footer Top */}
      <div id="footer-top" className="footer-top">
        <div className="container">
          <div className="row g-4">
            {/* About Column */}
            <div className="col-lg-4 col-md-6">
              <div id="about-widget" className="footer-widget about-widget">
                <Link to="/" className="footer-logo">
                  <h2 id="footer-logo-text">متجر الأزياء</h2>
                </Link>
                <p id="about-description" className="about-text">
                  نوفر أحدث صيحات الموضة بجودة عالية وأسعار تنافسية. نسعى دائماً لتقديم أفضل تجربة تسوق لعملائنا الكرام.
                </p>
                <div id="social-media-links" className="social-links">
                  <a href="https://facebook.com" id="facebook-link" className="social-link facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF className="social-icon" />
                  </a>
                  <a href="https://twitter.com" id="twitter-link" className="social-link twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="social-icon" />
                  </a>
                  <a href="https://instagram.com" id="instagram-link" className="social-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://youtube.com" id="youtube-link" className="social-link youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube className="social-icon" />
                  </a>
                  <a href="https://linkedin.com" id="linkedin-link" className="social-link linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-2 col-md-6">
              <div id="quick-links-widget" className="footer-widget">
                <h4 className="widget-title">روابط سريعة</h4>
                <ul id="quick-links" className="footer-links">
                  <li><Link to="/">الرئيسية</Link></li>
                  <li><Link to="/shop">المتجر</Link></li>
                  <li><Link to="/new-arrivals">وصل حديثاً</Link></li>
                  <li><Link to="/sale">تخفيضات</Link></li>
                  <li><Link to="/about">من نحن</Link></li>
                  <li><Link to="/contact">اتصل بنا</Link></li>
                </ul>
              </div>
            </div>

            {/* Categories Column */}
            <div className="col-lg-2 col-md-6">
              <div id="categories-widget" className="footer-widget">
                <h4 className="widget-title">الأقسام</h4>
                <ul id="category-links" className="footer-links">
                  <li><Link to="/category/men">ملابس رجالية</Link></li>
                  <li><Link to="/category/women">ملابس نسائية</Link></li>
                  <li><Link to="/category/kids">ملابس أطفال</Link></li>
                  <li><Link to="/category/accessories">إكسسوارات</Link></li>
                  <li><Link to="/category/shoes">أحذية</Link></li>
                  <li><Link to="/category/bags">حقائب</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-lg-4 col-md-6" style={{ direction: 'rtl', textAlign: 'right' }}>
              <div id="contact-widget" className="footer-widget contact-widget">
                <h4 className="widget-title">معلومات الاتصال</h4>
                <ul id="contact-info" className="contact-info">
                  <li>
                    <span className="icon"><FaMapMarkerAlt /></span>
                    <div className="text">
                      <p>الرياض، المملكة العربية السعودية</p>
                      <p>شارع الملك فهد، ص.ب 12345</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon"><FaPhoneAlt /></span>
                    <div className="text">
                      <p><a href="tel:+966112345678">+966 11 234 5678</a></p>
                      <p><a href="tel:+966501234567">+966 50 123 4567</a></p>
                    </div>
                  </li>
                  <li>
                    <span className="icon"><FaEnvelope /></span>
                    <div className="text">
                      <p><a href="mailto:info@fashionshop.com">info@fashionshop.com</a></p>
                      <p><a href="mailto:support@fashionshop.com">support@fashionshop.com</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div id="footer-bottom" className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p id="copyright-text" className="copyright-text">
                &copy; {currentYear} متجر الأزياء. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="col-md-6">
              <div id="payment-methods" className="payment-methods">
                <span>طرق الدفع المتاحة:</span>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="طرق الدفع" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div id="newsletter-section" className="newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="newsletter-text">
                  <h4>اشترك في نشرتنا البريدية</h4>
                  <p>اشترك للحصول على أحدث العروض والتخفيضات مباشرة إلى بريدك الإلكتروني</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="newsletter-form">
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="بريدك الإلكتروني" 
                      aria-label="البريد الإلكتروني"
                      required 
                    />
                    <button className="btn btn-primary" type="submit">
                      <span>اشتراك</span>
                      <FaPaperPlane className="ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;