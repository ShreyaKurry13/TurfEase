import React from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <div className="py-4" style={{ backgroundColor: "#587653" }}>
        <div className="container">
          <h1 className="text-white text-center">About Us</h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <img
              src="/assets/TurfEase.jpg"
              className="img-fluid rounded"
              alt="about-turfzone"
              loading="lazy"
            />
          </div>
          <div className="col-md-8">
            <div>
              <h2>About Us</h2>
              <hr className="mb-4" />
              <p>
                Welcome to TurfEase, your all-in-one platform for discovering and booking sports turfs across your city. We are dedicated to making sports more accessible by eliminating the hassle of offline booking and scheduling. Players can instantly check turf availability, view pricing, and book their preferred slots online. Our clean and responsive interface ensures a smooth experience whether you're using a mobile, tablet, or desktop. We empower turf owners with tools to manage bookings, update turf details, and monitor payments in real time. With secure online payments, real-time confirmations, and easy cancellations, we keep it simple and safe. Our contact form allows players and turf managers to connect for special bookings or support queries. Built using React.js, Spring Boot, and MySQL, TurfEase is a modern solution for a modern sports community.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <h2>Our History</h2>
            <hr className="mb-4" />
            <p>
              The idea behind TurfEase was born in early 2024 when a group of sports enthusiasts struggled to find a reliable way to book turf grounds for evening matches. We noticed how frustrating it was to call turf managers, confirm availability manually, and often face last-minute cancellations or miscommunications. What started as a simple Excel sheet and WhatsApp group for turf availability quickly evolved into a vision — to digitally transform turf booking in India.
            </p>
            <p>
              By mid-2024, we began developing the platform using React.js for the frontend, Spring Boot for the backend, and MySQL as our core database. Our goal was to make the process fast, transparent, and fair for both players and turf owners. We officially launched our beta version in early 2025 with a small set of partners in Maharashtra. Positive feedback and real-world use helped us refine our features — including real-time slot availability, secure online payments, and smart filters. Today, TurfEase continues to grow, empowering local players, turf managers, and sports organizers through a tech-enabled booking solution built for the future of Indian sports.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <h2>What We Offer</h2>
            <hr className="mb-4" />
            <ul>
              <li><b>Real-Time Turf Availability:</b> Instantly view available time slots, reducing the need for manual confirmations.</li>
              <li><b>Easy Online Booking:</b> Select date, time, and turf with just a few clicks. Booking confirmations are sent via email.</li>
              <li><b>Secure Payment Gateway:</b> Pay securely online using UPI, debit/credit cards, or wallets. Payments update in real time.</li>
              <li><b>Turf Management for Owners:</b> Admin panel to manage turf info, view bookings, and track payments.</li>
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <h2>Our Impact</h2>
            <hr className="mb-4" />
            <p>
              At TurfEase, we’re more than just a booking platform — we’re enabling a sports movement. Since our launch, we’ve helped thousands of players find and book turfs easily, saving hours of effort. We've partnered with local turf owners to bring their venues online, helping them increase bookings and revenue. By digitizing the process, we’ve reduced booking errors, improved slot utilization, and brought transparency to the turf ecosystem. Our platform encourages healthy lifestyles and community sports by making access to sports infrastructure faster, fairer, and smarter.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Join Us</h2>
            <hr className="mb-4" />
            <p>
              Whether you're a sports lover looking for the perfect place to play, or a turf owner wanting to grow your business — TurfEase is the right place for you.
            </p>
            <p>
              🎮 <b>For Players:</b> Create your free account, explore turfs near you, book your favorite slot, and get playing. It's fast, secure, and hassle-free!
            </p>
            <p>
              🏟️ <b>For Turf Owners:</b> List your turf, manage bookings with ease, receive payments instantly, and connect with more customers every day.
            </p>
            <p>
              🚀 Be part of the change. Join our growing sports community and experience the power of smart, digital turf management.
            </p>
            <p>
              <b>
                Have questions? Reach out to us at <Link to="/contact">contact@turfEase.site</Link> and stay updated with the latest news and events!
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
