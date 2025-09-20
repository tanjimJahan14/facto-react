import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card sales-overview">
            <div className="card-header">
              <div className="card-icon">📊</div>
              <h3>Sales overview from Previous Day</h3>
            </div>
            <div className="sales-stats">
              <div className="total-sales">
                <span className="check-icon">✓</span>
                <span className="label">Total sales:</span>
                <span className="amount">$12,500</span>
              </div>
              <div className="chart-area">
                <div className="highest-sale">
                  <span className="highest-label">Highest sale</span>
                  <span className="highest-amount">$2,450</span>
                </div>
                <div className="chart">
                  <div className="bar-chart">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "60%" }}></div>
                    <div className="bar" style={{ height: "30%" }}></div>
                    <div className="bar" style={{ height: "80%" }}></div>
                    <div className="bar" style={{ height: "70%" }}></div>
                    <div className="bar" style={{ height: "90%" }}></div>
                    <div className="bar" style={{ height: "100%" }}></div>
                  </div>
                  <div className="chart-labels">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>
                </div>
              </div>
              <div className="avg-sale">
                <span className="check-icon">✓</span>
                <span>Avg. sale: $104.16 / per transaction</span>
              </div>
            </div>
          </div>

          <div className="feature-card factoring">
            <div className="card-header">
              <div className="card-icon">⚡</div>
              <h3>Factoring Possible Amount.</h3>
            </div>
            <div className="factoring-content">
              <div className="available-amount">
                <span className="amount-label">Available amount</span>
                <div className="amount-display">
                  <span className="currency">$</span>
                  <span className="amount">15,375</span>
                  <span className="currency-label">USD</span>
                </div>
              </div>
              <div className="factoring-details">
                <div className="detail-row">
                  <span className="currency-icon">$</span>
                  <span className="detail-label">
                    Factored amount vs. remaining balance
                  </span>
                </div>
                <div className="balance-info">
                  <span className="balance-label">Factored balance</span>
                  <span className="balance-amount">$11,531.25</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "75%" }}></div>
                </div>
                <span className="percentage">75%</span>
              </div>
            </div>
          </div>

          <div className="feature-card workflow">
            <div className="card-header">
              <div className="card-icon">🔐</div>
              <h3>Secure & Streamlined Workflow</h3>
            </div>
            <div className="workflow-content">
              <div className="user-section">
                <div className="recent-user">
                  <span className="recent-label">Recent User</span>
                  <div className="user-avatars">
                    <div className="avatar">👤</div>
                    <div className="avatar">👤</div>
                    <div className="avatar">👤</div>
                    <div className="avatar">👤</div>
                    <div className="avatar">+1</div>
                  </div>
                </div>
                <div className="total-balance">
                  <span className="balance-label">Total Balance</span>
                  <span className="balance-amount">23,576.00</span>
                  <button className="add-number-btn">+ Add Number</button>
                </div>
              </div>
              <div className="status-section">
                <div className="online-status">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Online</span>
                  </div>
                  <div className="restaurant-info">
                    <span>Tomy Restaurant</span>
                    <span className="amount">+$10K</span>
                    <span className="status-label">Confirm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
