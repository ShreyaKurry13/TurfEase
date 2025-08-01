import React from "react";

export default function Contact() {
  return (
    <>
      <div className="py-4 bg-theme" style={{ backgroundColor: "#587653" }}>
        <div className="container">
          <h1 className="text-start text-white text-center">Contact Us</h1>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="text-center mb-3">We'd Love to Hear From You!</h1>
        <p className="text-center mb-2">
          At TurfEase, we are committed to helping you connect, play, and enjoy.
          Whether you have questions, need assistance, or just want to reach out, we’re here to help.
        </p>
        <p className="text-center mb-5">
          Please feel free to get in touch with us using the form below, or use
          the contact details provided to reach out in other ways. Your feedback
          is important to us, and we’d love to hear from you!
        </p>
        <p
          className="form-message"
          style={{
            textAlign: "center",
            fontSize: "21px",
            fontWeight: "bold",
            color: "green",
          }}
        ></p>

        <form
          id="contact-form"
          action="https://www.soccersocial.site/contact-store"
          method="POST"
          encType="multipart/form-data"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="hidden" name="_method" value="post" />

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="user_name" className="form-label">
                Full Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                placeholder="Enter Your Name"
                maxLength="55"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="user_phone" className="form-label">
                Phone*
              </label>
              <input
                type="text"
                className="form-control"
                id="user_phone"
                name="user_phone"
                maxLength="10"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="user_email" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                name="user_email"
                maxLength="70"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="user_address" className="form-label">
                City*
              </label>
              <input
                type="text"
                className="form-control"
                id="user_address"
                name="user_address"
                maxLength="30"
                placeholder="City"
                required
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="reason" className="form-label">
                Reason*
              </label>
              <select
                className="form-control"
                id="reason"
                name="reason"
                required
              >
                <option value="">Select Reason</option>
                <option value="Payment/Refund related issues">
                  Payment/Refund related issues
                </option>
                <option value="Feedback regarding SOS Staff">
                  Feedback regarding SOS Staff
                </option>
                <option value="Feedback regarding Venues">
                  Feedback regarding Venues
                </option>
                <option value="Suggestions (Regarding Anything)">
                  Suggestions (Regarding Anything)
                </option>
                <option value="Other reason">Other reason</option>
              </select>
            </div>

            <div className="col-md-12">
              <label htmlFor="message" className="form-label">
                Enter Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                name="message"
                maxLength="255"
                placeholder="Enter Message here..."
                required
              ></textarea>
            </div>

            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-secondary px-5"
                id="submit-button"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
