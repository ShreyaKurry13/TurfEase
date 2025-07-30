import React from 'react';
import './Footer.css'; // Optional custom styles
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>MyCompany</h5>
            <p>© {new Date().getFullYear()} MyCompany, Inc. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="me-3 footer-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="me-3 footer-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="footer-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

        </div>
      </div>

      <div className="text-center py-3 bg-secondary">
        <small>Built with ❤️ using React & Bootstrap</small>
      </div>
    </footer>
  );
}
