/* eslint-disable jsx-a11y/anchor-is-valid */
// client/src/LoginComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import '../styles/login.css';

const LoginComponent = () => {
  const [active, setActive] = useState(false);
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const navigate = useNavigate();

  // Handler for Google login success
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.log('Google credentialResponse:', credentialResponse);
    // This should now contain a "credential" property (id token)
    const token = credentialResponse.credential;
    if (!token) {
      console.error('No token returned from Google sign in');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/landing');
      } else {
        console.error('Backend error:', data.error);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

  // Handle local Sign In with email/password
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: signinEmail, password: signinPassword }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/landing');
      } else {
        alert(data.error || 'Sign in failed');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  // Handle local Sign Up with name, email, and password
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: signupName, email: signupEmail, password: signupPassword }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/landing');
      } else {
        alert(data.error || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className={`container ${active ? 'active' : ''}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-icons">
            {/* Custom Google button using GoogleLogin with render prop */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
              render={(renderProps) => (
                <button type="button" className="icon" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <i className="fa-brands fa-google-plus-g"></i>
                </button>
              )}
            />
          </div>
          <span>or use Email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <div className="social-icons">
            {/* Custom Google button using GoogleLogin with render prop */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
              render={(renderProps) => (
                <button type="button" className="icon" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <i className="fa-brands fa-google-plus-g"></i>
                </button>
              )}
            />
          </div>
          <span>or use Email Password</span>
          <input
            type="email"
            placeholder="Email"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
            required
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button type="button" onClick={() => setActive(false)} id="login">
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button type="button" onClick={() => setActive(true)} id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
