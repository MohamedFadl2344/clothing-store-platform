import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// RTL Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

// Icons
import { FaSpinner } from 'react-icons/fa';

// Components
import Navbar from './component/navbar/navbar';
import Popular from './component/popular/popular';
import Hero from './component/hero/hero';
import Featured from './component/featured/featured';
import Offers from './component/offers/offers';
import Testimonials from './component/testimonials/testimonials';
import Footer from './component/footer/footer';

// Lazy loaded pages
const About = lazy(() => import('./pages/About/About'));
import Contact from './pages/Contact/Contact';

// Loading component
const Loading = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
    <div className="text-center">
      <FaSpinner className="spinner text-primary" size={32} />
      <p className="mt-3">جاري التحميل...</p>
    </div>
  </div>
);

const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    // Set RTL direction and Arabic language
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Popular />
                <Featured />
                <Offers />
                <Testimonials />
              </>
            } />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Shop Page */}
            {/* <Route path="/shop" element={<Shop />} /> */}
           
            {/* 404 Page - Keep this last */}
            <Route path="*" element={
              <div className="container py-5 text-center mb-5">
                <h2 className=" py-5 text-black mt-5">404 - الصفحة غير موجودة</h2>
                <p className="text-muted">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppWrapper />
      </Router>
    </HelmetProvider>
  );
}

export default App;
