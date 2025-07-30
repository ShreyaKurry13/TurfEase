import React from 'react';
import './Header.css';
import { Link } from 'react-router'; // Make sure you're using 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '80px' }}>
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="#">
          <img src='' alt='logo' />
        </Link>

        {/* Hamburger button for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
