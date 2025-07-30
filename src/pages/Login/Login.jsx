import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  // State for form toggle
  const [isLogin, setIsLogin] = useState(true);
  
  // State for form inputs
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // State for form validation
  const [validated, setValidated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Here you would typically handle the actual login API call
      console.log('Login submitted:', loginData);
      // For demo purposes, show a success message or error
      if (loginData.email === 'test@example.com' && loginData.password === 'password') {
        // Successful login simulation
        setLoginError('');
        // Redirect would happen here in a real app
      } else {
        setLoginError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    }
    
    setValidated(true);
  };

  // Handle register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else if (registerData.password !== registerData.confirmPassword) {
      setRegisterError('كلمات المرور غير متطابقة');
    } else {
      // Here you would typically handle the actual registration API call
      console.log('Registration submitted:', registerData);
      setRegisterError('');
      // Redirect or show success message would happen here in a real app
    }
    
    setValidated(true);
  };

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Handle register input changes
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setValidated(false);
    setLoginError('');
    setRegisterError('');
  };

  return (
    <div className="login-page-wrapper">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8} lg={6}>
            <div className="login-form-container">
              {/* Form Header */}
              <div className="form-header text-center mb-4">
                <h2 className="form-title">{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h2>
                <p className="form-subtitle">
                  {isLogin 
                    ? 'أهلاً بك مجدداً في متجر الأزياء' 
                    : 'انضم إلينا واستمتع بتجربة تسوق فريدة'}
                </p>
              </div>
              
              {/* Login Form */}
              {isLogin ? (
                <Card className="login-card">
                  <Card.Body>
                    {loginError && <Alert variant="danger">{loginError}</Alert>}
                    
                    <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                      <Form.Group className="login-form-group" controlId="loginEmail">
                        <div className="input-icon-wrapper">
                          <FaEnvelope className="input-icon" />
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="البريد الإلكتروني"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                          />
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى إدخال بريد إلكتروني صحيح
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="login-form-group" controlId="loginPassword">
                        <div className="input-icon-wrapper">
                          <FaLock className="input-icon" />
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="كلمة المرور"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                          />
                          <button 
                            type="button" 
                            className="password-toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى إدخال كلمة المرور
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <Form.Check
                          type="checkbox"
                          id="rememberMe"
                          label="تذكرني"
                          className="remember-me-checkbox"
                        />
                        <Link to="/forgot-password" className="forgot-password-link">
                          نسيت كلمة المرور؟
                        </Link>
                      </div>

                      <Button variant="primary" type="submit" className="login-submit-btn w-100">
                        تسجيل الدخول
                      </Button>
                    </Form>
                    
                    <div className="form-footer text-center mt-4">
                      <p>ليس لديك حساب؟</p>
                      <Button onClick={toggleForm} className="toggle-form-btn">
                        <FaUser className="me-1" /> إنشاء حساب جديد
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                /* Register Form */
                <Card className="register-card">
                  <Card.Body>
                    {registerError && <Alert variant="danger">{registerError}</Alert>}
                    
                    <Form noValidate validated={validated} onSubmit={handleRegisterSubmit}>
                      <Form.Group className="login-form-group" controlId="registerName">
                        <div className="input-icon-wrapper">
                          <FaUser className="input-icon" />
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="الاسم الكامل"
                            value={registerData.name}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى إدخال الاسم الكامل
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="login-form-group" controlId="registerEmail">
                        <div className="input-icon-wrapper">
                          <FaEnvelope className="input-icon" />
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="البريد الإلكتروني"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى إدخال بريد إلكتروني صحيح
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="login-form-group" controlId="registerPhone">
                        <div className="input-icon-wrapper">
                          <FaPhone className="input-icon" />
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="رقم الهاتف"
                            value={registerData.phone}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى إدخال رقم هاتف صحيح
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="login-form-group" controlId="registerPassword">
                        <div className="input-icon-wrapper">
                          <FaLock className="input-icon" />
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="كلمة المرور"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                            minLength="8"
                          />
                          <button 
                            type="button" 
                            className="password-toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="login-form-group" controlId="registerConfirmPassword">
                        <div className="input-icon-wrapper">
                          <FaLock className="input-icon" />
                          <Form.Control
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="تأكيد كلمة المرور"
                            value={registerData.confirmPassword}
                            onChange={handleRegisterChange}
                            required
                          />
                          <button 
                            type="button" 
                            className="password-toggle-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            aria-label={showConfirmPassword ? "إخفاء تأكيد كلمة المرور" : "إظهار تأكيد كلمة المرور"}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          يرجى تأكيد كلمة المرور
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          id="terms"
                          label={<span>أوافق على <Link to="/terms" className="terms-link">الشروط والأحكام</Link></span>}
                          feedback="يجب الموافقة على الشروط والأحكام للمتابعة"
                          feedbackType="invalid"
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="login-submit-btn w-100">
                        إنشاء حساب
                      </Button>
                    </Form>
                    
                    <div className="form-footer text-center mt-4">
                      <p>لديك حساب بالفعل؟</p>
                      <Button onClick={toggleForm} className="toggle-form-btn">
                        <FaUser className="me-1" /> تسجيل الدخول
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
              
              {/* Back to Home Link */}
              <div className="back-to-home text-center mt-3">
                <Link to="/" className="back-link">
                  <FaArrowLeft className="me-1" /> العودة إلى الصفحة الرئيسية
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;