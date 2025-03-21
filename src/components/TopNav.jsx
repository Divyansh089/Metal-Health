import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topnav.css';

const TopNav = () => {
  return (
    <header className="top-navbar">
      <div className="logo">
        {/* Clicking the logo can also navigate to a default route (like home) */}
        <Link to="/app/home">MHealth</Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
    </header>
  );
};

export default TopNav;
