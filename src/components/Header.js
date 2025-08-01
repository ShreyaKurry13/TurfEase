import React from 'react';
import './Header.css';
import { Link } from 'react-router';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '80px' }}>
      <div className="container-fluid">
      
        <Link className="navbar-brand" to="/" >
          <img src='/assets/TurfEaseShort.jpg' alt='logo' style={{height:'50px',width:'50px'}}/>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event">EVENT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
