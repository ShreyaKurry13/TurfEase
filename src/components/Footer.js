import React from "react";
import "./Footer.css"; // Optional custom styles
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer text-light pt-4" style={{backgroundColor: '#587653'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Discover and book sports turfs instantly with TurfZone – your
              all-in-one platform for hassle-free scheduling, real-time
              availability, and secure payments. Built with React.js and Spring
              Boot to connect players and turf owners seamlessly!
            </p>
          </div>

          <div className="col-md-4 mb-3 text-light">
            <h5>Additional Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/event" className="footer-link">
                  Event
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a
              href="https://facebook.com"
              className="me-3 footer-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="me-3 footer-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="footer-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-3" style={{backgroundColor: '#446e3d'}}>
        <small>
          © {new Date().getFullYear()} MyCompany, Inc. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
