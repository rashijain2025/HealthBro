import './Login.css';
import { useState } from 'react';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(loginData.email)) newErrors.email = 'Email is invalid';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate login process
      setTimeout(() => {
        console.log('Login successful for:', loginData.email);
        if (loginData.rememberMe) {
          localStorage.setItem('rememberedEmail', loginData.email);
        }
        setIsLoggedIn(true);
        setLoading(false);
      }, 1000);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!loginData.email) {
      alert('Please enter your email first');
      return;
    }
    alert(`Password reset link would be sent to ${loginData.email}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '', rememberMe: false });
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  if (isLoggedIn) {
    return (
      <div className="logged-in-container">
        <h2>Welcome, {loginData.email}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (showRegister) {
    return (
      <div className="register-container">
        <h2>Register</h2>
        {/* Add your registration form here */}
        <button onClick={toggleRegister}>Back to Login</button>
      </div>
    );
  }

  return (
    <>
      {/* <img src="src/assets/loginimg.jpg" alt="bgimg" className='h-100 w-100' /> */}
      
      <div className='logged-in-container'>
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label><br />
          <input 
            placeholder="abc@example.com" 
            type="email"  
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
          <br />
          
          <label htmlFor="password">Password</label><br />
          <input 
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
          <br />
          
          <input 
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={loginData.rememberMe}
            onChange={handleChange}
          /> 
          <label htmlFor="rememberMe"> Remember me</label> 
          
          <button type="button" onClick={handleForgotPassword}>
            Forgot password
          </button> 
          <br /><br />
          
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          <p>Don't have an account?
            <button type="button" onClick={toggleRegister}>
              Register
            </button>
          </p>
        </form>
      </div>
    </>
  );
}