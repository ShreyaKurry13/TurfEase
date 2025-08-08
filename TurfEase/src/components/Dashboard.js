import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">TurfEase</h2>
        <nav className="sidebar-menu">
          <a href="#turf-details">Turf Details</a>
          <a href="#feedback-history">Feedback History</a>
          <a href="#booking-history">Booking History</a>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome Admin</h1>
        <div className="card-grid">
          <div className="card yellow" id="turf-details">
            <h3>Turf Details</h3>
            <ul className="card-options">
              <li><a href="/add-turf">➕ Add Turf</a></li>
              <li><a href="/delete-turf">❌ Delete Turf</a></li>
              <li><a href="/all-turfs">📋 All Turfs</a></li>            
            </ul>
          </div>

          <div className="card blue" id="feedback-history">
            <h3>Feedback History</h3>
            <p>View user feedback and ratings.</p>
          </div>

          <div className="card green" id="booking-history">
            <h3>Booking History</h3>
            <p>Check all booking records.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
