import React from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <div class="py-4 bg-theme" style={{ backgroundColor: "#587653" }}>
        <div class="container">
          <h1 class="text-start text-white text-center">About Us</h1>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-md-4">
            <img
              src="/assets/TurfEase.jpg"
              class="w-100 mb-3 about-img"
              loading="lazy"
              alt="sos-about"
              title="sos-about"
              height="auto"
              width="auto"
            />
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <div class="about-content">
              <h2>About Us</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                Welcome to TurfZone, your all-in-one platform for discovering
                and booking sports turfs across your city. We are dedicated to
                making sports more accessible by eliminating the hassle of
                offline booking and scheduling. Players can instantly check turf
                availability, view pricing, and book their preferred slots
                online. Our clean and responsive interface ensures a smooth
                experience whether you're using a mobile, tablet, or desktop. We
                empower turf owners with tools to manage bookings, update turf
                details, and monitor payments in real time. With secure online payments, real-time
                confirmations, and easy cancellations, we keep it simple and
                safe. Our contact form allows players and turf managers to
                connect for special bookings or support queries. Built using
                React.js, Spring Boot, and MySQL, TurfZone is a modern solution
                for a modern sports community. 
              </p>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12 d-flex align-items-center ms-auto pt-3">
            <div class="about-content">
              <h2>Our History</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                The idea behind TurfZone was born in early 2024 when a group of
                sports enthusiasts struggled to find a reliable way to book turf
                grounds for evening matches. We noticed how frustrating it was
                to call turf managers, confirm availability manually, and often
                face last-minute cancellations or miscommunications. What
                started as a simple Excel sheet and WhatsApp group for turf
                availability quickly evolved into a vision — to digitally
                transform turf booking in India.
              </p>

              <p>
                By mid-2024, we began developing the platform using React.js for
                the frontend, Spring Boot for the backend, and MySQL as our core
                database. Our goal was to make the process fast, transparent,
                and fair for both players and turf owners. We officially
                launched our beta version in early 2025 with a small set of
                partners in Maharashtra. Positive feedback and real-world use
                helped us refine our features — including real-time slot
                availability, secure online payments, and smart filters. Today,
                TurfZone continues to grow, empowering local players, turf
                managers, and sports organizers through a tech-enabled booking
                solution built for the future of Indian sports.
              </p>
            </div>
          </div>
          <div class="col-md-12 d-flex align-items-center ms-auto pt-3">
            <div class="about-content">
              <h2>What We Offer</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                <b>• Real-Time Turf Availability: </b>Users can view available
                time slots instantly. Reduces the need for calls or manual
                confirmations.
              </p>
              <p>
                <b>• Easy Online Booking:</b> Select date, time, and turf in
                just a few clicks. Booking confirmation sent via email.
              </p>
              <p>
                <b>• Secure Payment Gateway:</b> Pay securely online using UPI,
                debit/credit card, or wallet. Payment status updates in real
                time.
              </p>
              <p>
                <b>• Turf Management for Owners :</b>Admin panel to
                add/update/delete turf info. View bookings and payment records.
              </p>
            </div>
          </div>
          <div class="col-md-12 d-flex align-items-center ms-auto pt-3">
            <div class="about-content">
              <h2>Our Impact</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                At TurfZone, we’re more than just a booking platform — we’re
                enabling a sports movement. Since our launch, we’ve helped
                thousands of players find and book turfs easily, saving hours of
                effort. We've partnered with local turf owners to bring their
                venues online, helping them increase bookings and revenue. By
                digitizing the process, we’ve reduced booking errors, improved
                slot utilization, and brought transparency to the turf
                ecosystem. Our platform encourages healthy lifestyles and
                community sports by making access to sports infrastructure
                faster, fairer, and smarter.
              </p>
            </div>
          </div>
          <div class="col-md-12 d-flex align-items-center ms-auto pt-3">
            <div class="about-content">
              <h2>Join Us</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                Whether you're a sports lover looking for the perfect place to
                play, or a turf owner wanting to grow your business — TurfZone
                is the right place for you. 
                <br/>
                <br/>
                🎮 For Players: Create your free
                account, explore turfs near you, book your favorite slot, and
                get playing. It's fast, secure, and hassle-free! 
                <br/>
                <br/>
                🏟️ For Turf
                Owners: List your turf, manage bookings with ease, receive
                payments instantly, and connect with more customers every day.
                <br/>
                <br/>
                🚀 Be part of the change. Join our growing sports community and
                experience the power of smart, digital turf management.
              </p>
              <p>
                <b>
                  "Have questions? Reach out to us at{" "}
                  <Link to="/contact">
                    contact@turfEase.site
                  </Link>{" "}
                  stay updated with the latest news and events!"
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
