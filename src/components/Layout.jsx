// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import SideNav from './SideNav';
import '../styles/layout.css';

const Layout = () => {
  const [sideOpen, setSideOpen] = useState(true);

  return (
    <div className="layout-wrapper">
      {/* Top navbar fixed at top */}
      <TopNav />

      {/* Body below the top navbar */}
      <div className="layout-body">
        {/* Collapsible side nav */}
        <SideNav sideOpen={sideOpen} setSideOpen={setSideOpen} />

        {/* Main content area (child pages) */}
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
