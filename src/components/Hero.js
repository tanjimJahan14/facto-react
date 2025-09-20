import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Fast, secure, hassle-free</span>
          </div>
          <h1 className="hero-title">
            Get Paid Faster 🚀 <span className="highlight">Instant Cash</span>
            <br />
            for Businesses!
          </h1>
          <p className="hero-description">
            Stop waiting months for credit card payments. CASA helps business
            owners access cash instantly by converting card transactions into
            immediate funds.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
