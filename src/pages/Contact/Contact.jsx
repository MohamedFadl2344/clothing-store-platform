import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      id: 'contact-address',
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'العنوان',
      content: <span className="text-contact-icon">123 شارع الملك فهد، الرياض، المملكة العربية السعودية</span>,
      link: 'https://maps.google.com',
      color: 'var(--primary-color)'
    },
    {
      id: 'contact-phone',
      icon: <FaPhoneAlt className="contact-icon" />,
      title: 'الهاتف',
      content: <span className="text-contact-icon">+966 11 234 5678</span>,
      link: 'tel:+966112345678',
      color: 'var(--success-color)'
    },
    {
      id: 'contact-email',
      icon: <FaEnvelope className="contact-icon" />,
      title: 'البريد الإلكتروني',
      content: <span className="text-contact-icon">info@example.com</span>,
      link: 'mailto:info@example.com',
      color: 'var(--warning-color)'
    },
    {
      id: 'contact-hours',
      icon: <FaClock className="contact-icon" />,
      title: 'ساعات العمل',
      content: <span className="text-contact-icon">الأحد - الخميس: 9 ص - 10 م</span>,
      secondary: <span className="text-contact-icon">الجمعة - السبت: 4 م - 12 م</span>,
      color: 'var(--danger-color)'
    }
  ];

  const socialLinks = [
    { 
      id: 'contact-facebook', 
      icon: <FaFacebookF className="contact-social-icon" />, 
      url: '#', 
      color: '#1877F2',
      label: 'فيسبوك'
    },
    { 
      id: 'contact-twitter', 
      icon: <FaTwitter className="contact-social-icon" />, 
      url: '#', 
      color: '#1DA1F2',
      label: 'تويتر'
    },
    { 
      id: 'contact-instagram', 
      icon: <FaInstagram className="contact-social-icon" />, 
      url: '#', 
      color: '#E1306C',
      label: 'انستغرام'
    },
    { 
      id: 'contact-linkedin', 
      icon: <FaLinkedinIn className="contact-social-icon" />, 
      url: '#', 
      color: '#0077B5',
      label: 'لينكد إن'
    },
    { 
      id: 'contact-whatsapp', 
      icon: <FaWhatsapp className="contact-social-icon" />, 
      url: '#', 
      color: '#25D366',
      label: 'واتساب'
    }
  ];

  return (
    <div id="contact-page" dir="rtl">
      <Helmet>
        <title>اتصل بنا - متجر الأزياء</title>
        <meta name="description" content="تواصل مع فريق الدعم الفني لمتجر الأزياء. نحن هنا لمساعدتك في أي استفسارات أو أسئلة." />
      </Helmet>

      {/* Hero Section */}
      <section id="contact-hero" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">تواصل معنا</h1>
            <p className="lead text-muted">نحن هنا لمساعدتك والإجابة على استفساراتك</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact-info" className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-3">
                <div className="contact-card">
                  <div className="contact-icon-wrapper" style={{ backgroundColor: `${item.color}15` }}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <h3 className="h5 mt-3 mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-decoration-none">
                      <p className="mb-1">{item.content}</p>
                    </a>
                  ) : (
                    <p className="mb-1">{item.content}</p>
                  )}
                  {item.secondary && <p className="text-muted small mb-0">{item.secondary}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form-section" className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <h2 className="mb-4 text-contact">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">الاسم الكامل</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">الموضوع</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">الرسالة</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div className="map-wrapper h-100">
                <iframe
                  title="موقعنا على الخريطة"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0418723469!2d46.67546641500052!3d24.81340058407003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ4LjIiTiA0NsKwNDAnMzkuNyJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                  className="w-100 h-100"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section id="contact-social-media" className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-4 text-contact">تواصل معنا على وسائل التواصل الاجتماعي</h2>
          <div className="d-flex justify-content-center gap-3 flex-wrap" id="contact-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                id={social.id}
                href={social.url}
                className="contact-social-link d-flex flex-column align-items-center text-decoration-none"
                style={{ '--social-color': social.color }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <span className="contact-social-icon-wrapper d-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: '50px', height: '50px', backgroundColor: social.color }}>
                  {social.icon}
                </span>
                <span className="contact-social-label small text-muted">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;