import React from 'react';
import logo from './logo.svg';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;
