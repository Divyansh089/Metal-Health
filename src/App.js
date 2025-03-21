// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginComponent from './Pages/LoginComponent';
import LandingPage from './Pages/LandingPage';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import About from './Pages/About';      
import Blogs from './Pages/Blog'; 
import './styles/global.css'

function App() {
  return (
    <GoogleOAuthProvider clientId="141936658005-7ktenj9p70hqvnkarr87lg52qmr31kne.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginComponent />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Layout route: all pages that share top navbar & sidebar */}
          <Route path="/app" element={<Layout />}>
            {/* Nested routes: each child page rendered inside the Layout */}
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
