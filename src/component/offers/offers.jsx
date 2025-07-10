import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaTag, FaShoppingBag, FaRegClock, FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';
import './offers.css';

const OfferCard = memo(({ offer }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="offer-card">
      <div className="offer-image">
        {!imageLoaded && (
          <div className="image-placeholder">
            <div className="spinner"></div>
          </div>
        )}
        <img
          src={offer.image}
          alt={offer.title}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="offer-badge">
          <FaTag className="badge-icon" />
          <span>{offer.discount}% خصم</span>
        </div>
      </div>
      <div className="offer-content">
        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-description">{offer.description}</p>
        
        <div className="offer-price">
          <span className="current-price">{offer.currentPrice} ريال</span>
          {offer.originalPrice && (
            <span className="original-price">{offer.originalPrice} ريال</span>
          )}
        </div>
        
        <div className="offer-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < offer.rating ? 'star filled' : 'star'} 
            />
          ))}
          <span className="rating-count">({offer.ratingCount})</span>
        </div>
        
        <div className="offer-actions">
          <Link to={`/product/${offer.id}`} className="btn-view-offer">
            <FaShoppingBag className="me-1" />
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
});

const CountdownTimer = memo(({ timeLeft }) => (
  <div className="countdown-timer">
    <div className="countdown-item">
      <span className="countdown-value">{timeLeft.days.toString().padStart(2, '0')}</span>
      <span className="countdown-label">أيام</span>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-item">
      <span className="countdown-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
      <span className="countdown-label">ساعات</span>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-item">
      <span className="countdown-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
      <span className="countdown-label">دقائق</span>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-item">
      <span className="countdown-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
      <span className="countdown-label">ثواني</span>
    </div>
  </div>
));

const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  const offers = [
    {
      id: 1,
      title: 'حقيبة يد أنيقة',
      description: 'حقيبة يد عصرية تناسب جميع المناسبات الرسمية واليومية',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '199',
      originalPrice: '299',
      discount: 33,
      rating: 4,
      ratingCount: 128
    },
    {
      id: 2,
      title: 'ساعة ذكية',
      description: 'ساعة ذكية بميزات متقدمة تتبع اللياقة والصحة',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '599',
      originalPrice: '799',
      discount: 25,
      rating: 5,
      ratingCount: 89
    },
    {
      id: 3,
      title: 'نظارة شمسية',
      description: 'نظارة شمسية عصرية للحماية من أشعة الشمس الضارة',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '149',
      originalPrice: '249',
      discount: 40,
      rating: 4,
      ratingCount: 76
    },
    {
      id: 4,
      title: 'حذاء رياضي',
      description: 'حذاء رياضي مريح للجري والتمارين اليومية',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '299',
      originalPrice: '399',
      discount: 25,
      rating: 4,
      ratingCount: 112
    },
    {
      id: 5,
      title: 'قميص رجالي',
      description: 'قميص أنيق للمناسبات الرسمية والعمل',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '129',
      originalPrice: '199',
      discount: 35,
      rating: 4,
      ratingCount: 93
    },
    {
      id: 6,
      title: 'عطر نسائي',
      description: 'عطر أنثوي جذاب يدوم طويلاً برائحة عطرية فريدة',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      currentPrice: '349',
      originalPrice: '499',
      discount: 30,
      rating: 5,
      ratingCount: 67
    }
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  const slideTo = useCallback((direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setCurrentSlide(prev => {
      let newIndex = direction === 'next' ? prev + 1 : prev - 1;
      
      const itemsPerSlide = Math.min(3, offers.length);
      const totalSlides = Math.ceil(offers.length / itemsPerSlide) || 1;
      
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      
      return newIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, offers.length]);

  const prevSlide = useCallback(() => {
    slideTo('prev');
  }, [slideTo]);

  const nextSlide = useCallback(() => {
    slideTo('next');
  }, [slideTo]);

  const itemsPerPage = Math.min(3, offers.length);
  
  const start = (currentSlide * itemsPerPage) % offers.length;
  const end = start + itemsPerPage;
  
  const visibleOffers = end > offers.length
    ? [...offers.slice(start), ...offers.slice(0, end - offers.length)]
    : offers.slice(start, end);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide(prev => {
          const totalSlides = Math.ceil(offers.length / 3);
          return (prev + 1) % totalSlides;
        });
      }
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAnimating, offers.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = { ...prev };
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          if (newTime.minutes > 0) {
            newTime.minutes--;
            newTime.seconds = 59;
          } else if (newTime.hours > 0) {
            newTime.hours--;
            newTime.minutes = 59;
            newTime.seconds = 59;
          } else if (newTime.days > 0) {
            newTime.days--;
            newTime.hours = 23;
            newTime.minutes = 59;
            newTime.seconds = 59;
          } else {
            clearInterval(timer);
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.body.style.textAlign = 'right';
    
    return () => {
      document.documentElement.dir = 'ltr';
      document.body.style.textAlign = 'left';
    };
  }, []);

  return (
    <section className="offers-section" dir="rtl">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FaFire className="title-icon" />
            عروض خاصة
          </h2>
          <div className="section-subtitle">تصفح أحدث العروض والخصومات الحصرية لفترة محدودة</div>
        </div>

        <div className="countdown-wrapper">
          <div className="countdown-label">ينتهي العرض خلال:</div>
          <CountdownTimer timeLeft={timeLeft} />
        </div>

        <div 
          ref={sliderRef}
          className="offers-slider"
        >
          <div className="slider-controls">
            <button 
              className="slider-nav prev"
              onClick={prevSlide}
              aria-label="الشريحة السابقة"
            >
              <FaArrowRight />
            </button>
            
            <div className="slider-container">
              <div className="slider-track">
                {visibleOffers.map((offer, index) => (
                  <div key={`${offer.id}-${index}`} className="offer-slide-wrapper">
                    <OfferCard offer={offer} />
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="slider-nav next"
              onClick={nextSlide}
              aria-label="الشريحة التالية"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
        <div className="slider-dots">
          {Array.from({ length: Math.ceil(offers.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`انتقل إلى الشريحة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;