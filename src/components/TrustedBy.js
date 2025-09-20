import React from "react";
import "./TrustedBy.css";

function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="container">
        <div className="trusted-header">
          <span className="trusted-label">Trusted by</span>
          <span className="companies-label">Top Companies</span>
        </div>
        <div className="companies-logos">
          <div className="logo-item">Cubyn</div>
          <div className="logo-item">bastion</div>
          <div className="logo-item">DIGITS</div>
          <div className="logo-item">pipe</div>
          <div className="logo-item">ramp</div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
