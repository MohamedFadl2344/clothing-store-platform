import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of hero slides
  const heroSlides = [
    {
      title: 'أحدث صيحات الموضة 2024',
      subtitle: 'اكتشف تشكيلتنا الجديدة من الملابس الصيفية',
      buttonText: 'تسوق الآن',
      buttonLink: '/summer-collection',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'خصومات تصل إلى 50%',
      subtitle: 'احصل على أفضل العروض على تشكيلة الشتاء',
      buttonText: 'تصفح العروض',
      buttonLink: '/winter-sale',
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'تشكيلة حصرية من الإكسسوارات',
      subtitle: 'أحدث الإكسسوارات لتكمل إطلالتك',
      buttonText: 'اكتشف المزيد',
      buttonLink: '/accessories',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  // Go to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, [heroSlides.length]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, [heroSlides.length]);

  // Go to specific slide
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`} 
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="row align-items-center min-vh-100">
                <div className="col-lg-6 col-md-8 mx-auto text-center">
                  <div className="hero-content">
                    <span className="hero-badge">
                      تشكيلة {new Date().getFullYear()}
                    </span>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <div className="hero-buttons">
                      <Link to={slide.buttonLink} className="btn btn-primary btn-lg">
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button className="slide-nav slide-prev" onClick={prevSlide}>
          <FaArrowRight />
        </button>
        <button className="slide-nav slide-next" onClick={nextSlide}>
          <FaArrowLeft />
        </button>
        
        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="feature-item h-100">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="feature-text">
                <h5>شحن سريع</h5>
                <p>توصيل لجميع أنحاء المملكة</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-item h-100">
              <div className="feature-icon">
                <i className="fas fa-undo"></i>
              </div>
              <div className="feature-text">
                <h5>إرجاع سهل</h5>
                <p>خلال 14 يوم من الاستلام</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-item h-100">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="feature-text">
                <h5>دفع آمن</h5>
                <p>حماية بنسبة 100%</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-item h-100">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="feature-text">
                <h5>دعم فني</h5>
                <p>متاح على مدار الساعة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;