import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaShieldAlt, FaHeadset, FaLeaf } from 'react-icons/fa';
import { FiAward, FiUsers, FiShoppingBag } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'من نحن - متجر الأزياء';
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { id: 1, number: '5+', label: 'سنوات من الخبرة', icon: <FiAward /> },
    { id: 2, number: '50K+', label: 'عميل راضٍ', icon: <FiUsers /> },
    { id: 3, number: '10K+', label: 'منتج متوفر', icon: <FiShoppingBag /> },
  ];

  const features = [
    { 
      id: 1, 
      icon: <FaTruck />, 
      title: 'شحن سريع',
      description: 'توصيل سريع لجميع أنحاء المملكة خلال 2-5 أيام عمل'
    },
    { 
      id: 2, 
      icon: <FaShieldAlt />, 
      title: 'دفع آمن',
      description: 'مدفوعات آمنة ومشفرة لحماية معلوماتك المالية'
    },
    { 
      id: 3, 
      icon: <FaHeadset />, 
      title: 'دعم فني',
      description: 'فريق دعم فني متاح على مدار الساعة لمساعدتك'
    },
    { 
      id: 4, 
      icon: <FaLeaf />, 
      title: 'منتجات أصلية',
      description: 'جميع منتجاتنا أصلية وذات جودة عالية'
    },
  ];

  const team = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'المدير التنفيذي',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'سارة أحمد',
      role: 'مديرة التسويق',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'محمد علي',
      role: 'مصمم المنتجات',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="about-page" dir="rtl">
      {/* Hero Section */}
      <section id="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>من نحن</h1>
            <p className="lead">نحن رواد في عالم الأزياء والموضة العربية</p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">تصفح المنتجات</Link>
              <Link to="/contact" className="btn btn-outline">اتصل بنا</Link>
            </div>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Stats Section */}
      <section id="about-stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="stat-card"
                variants={itemVariants}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section id="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-black ">قصتنا</h2>
              <p className="text-about">
                تأسس متجرنا عام 2020 بمهمة واحدة بسيطة: تقديم أحدث صيحات الموضة بجودة عالية وأسعار مناسبة. اليوم، نحن فخورون بأننا أصبحنا منصة موثوقة للآلاف من العملاء في جميع أنحاء الوطن العربي.
              </p>
              <p className="text-about">
                نؤمن بأن الموضة ليست مجرد ملابس، بل هي أسلوب حياة يعكس شخصيتك وذوقك المميز. لذلك نحرص على انتقاء كل منتج بعناية لنوفر لك تجربة تسوق فريدة.
              </p>
              <Link to="/about" className="btn btn-secondary">اقرأ المزيد</Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="فريق العمل" 
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about-features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>لماذا تختارنا؟</h2>
            <p>نقدم لك تجربة تسوق استثنائية بكل معنى الكلمة</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about-team">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">فريقنا المتميز</span>
            <h2 className="section-title">فريقنا المحترف</h2>
            <div className="section-divider">
              <span></span>
              <i className="fas fa-tools"></i>
              <span></span>
            </div>
            <p className="section-description">خبراء الموضة الذين يجعلون أحلامك حقيقة</p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
              >
                <div className="team-card-inner">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="team-overlay"></div>
                    <div className="team-social">
                      <a href={member.social.twitter} aria-label="Twitter" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.social.linkedin} aria-label="LinkedIn" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={member.social.instagram} aria-label="Instagram" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-expertise">
                      <span>تصميم أزياء</span>
                      <span>تنسيق ألوان</span>
                      <span>خياطة</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/team" className="btn btn-primary btn-lg team-cta-btn">
              تعرف على المزيد عن فريقنا
              <i className="fas fa-arrow-left ms-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>هل أنت مستعد لاكتشاف عالم الأزياء؟</h2>
            <p>انضم إلى آلاف العملاء الراضين عن منتجاتنا وخدماتنا</p>
            <Link to="/products" className="btn btn-light">تسوق الآن</Link>
          </motion.div>
        </div>
        <div className="cta-overlay"></div>
      </section>
    </div>
  );
};

export default About;