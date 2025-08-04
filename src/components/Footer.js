import React from "react";
import { Link } from "react-router";
import "./Footer.css"; // Optional: custom styles if needed

export default function Footer() {
  return (
    <footer className="footer text-light pt-5" style={{ backgroundColor: "#587653" }}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p className="small">
              Discover and book sports turfs instantly with TurfZone – your all-in-one platform for
              hassle-free scheduling, real-time availability, and secure payments. Built with
              React.js and Spring Boot to connect players and turf owners seamlessly!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/event" className="text-white text-decoration-none">Event</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> TurfEase</li>
              <li className="mb-2"><i className="fas fa-phone-alt me-2"></i> +91 98898 989898</li>
              <li>
                <a
                  href="mailto:contact@turfEase.site"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-envelope me-2"></i> contact@turfEase.site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center py-3" style={{ backgroundColor: "#446e3d" }}>
        <small>© {new Date().getFullYear()} TurfEase. All rights reserved.</small>
      </div>
    </footer>
  );
}
