import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './testimonials.css';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'عميل دائم',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      content: 'تجربة تسوق رائعة! المنتجات ذات جودة عالية والخدمة سريعة. بالتأكيد سأقوم بالشراء مرة أخرى.',
    },
    {
      id: 2,
      name: 'سارة أحمد',
      role: 'مدونة موضة',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      content: 'أحببت تنوع المنتجات وجودتها. التوصيل كان سريعاً والتغليف أنيق جداً. أنصح الجميع بالتسوق من هنا.',
    },
    {
      id: 3,
      name: 'خالد عبدالله',
      role: 'عميل جديد',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 4,
      content: 'تجربة جيدة بشكل عام. الأسعار معقولة والمنتجات كما هي موصوفة. سأقوم بتجربة المزيد من المنتجات قريباً.',
    },
    {
      id: 4,
      name: 'نورة سعيد',
      role: 'عميلة متميزة',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      content: 'أشتريت فستاناً من المتجر وكان رائعاً! الجودة ممتازة والسعر مناسب. شكراً لكم على الخدمة المميزة.',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-warning' : 'text-muted'}
          style={{ opacity: index < rating ? 1 : 0.3 }}
        />
      ));
  };

  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>آراء عملائنا</h2>
          <p className="lead text-muted">اكتشف ما يقوله عملاؤنا عن تجربتهم معنا</p>
        </div>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <FaQuoteRight />
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.content}</p>
                    <div className="rating mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="img-fluid rounded-circle"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="author-info">
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className="text-muted mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;