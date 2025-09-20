import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">FACTO</span>
          </div>
          <nav className="nav-menu">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#how-it-works" className="nav-link">
              How it works
            </a>
            <a href="#why-different" className="nav-link">
              Why is different
            </a>
            <a href="#reviews" className="nav-link">
              Reviews
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <div className="auth-buttons">
            <button className="sign-in-btn">Sign In</button>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
