// src/components/SideNav.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/sidenav.css';

const SideNav = ({ sideOpen, setSideOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <aside className={`side-navbar ${sideOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {sideOpen ? (
          <button className="sidebar-close" onClick={() => setSideOpen(false)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        ) : (
          <button className="sidebar-open" onClick={() => setSideOpen(true)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <ul className="side-links">
        <li>
          <Link to="/app/dashboard">
            <i className="fa fa-chart-bar" aria-hidden="true"></i>
            {sideOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/app/profile">
            <i className="fa fa-user" aria-hidden="true"></i>
            {sideOpen && <span>Profile</span>}
          </Link>
        </li>
        <li>
          <Link to="/app/sessions">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            {sideOpen && <span>Sessions</span>}
          </Link>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
            {sideOpen && <span>Logout</span>}
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
