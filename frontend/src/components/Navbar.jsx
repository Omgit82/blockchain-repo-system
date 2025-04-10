import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🔐 Web3Vote</div>
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/vote">🗳️ Vote</Link></li>
        <li><Link to="/results">📊 Results</Link></li>
        <li><Link to="/about">ℹ️ About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
