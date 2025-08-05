import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    reason: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [responseColor, setResponseColor] = useState("green");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.reason) {
      setResponseMessage("Please select a reason.");
      setResponseColor("red");
      return;
    }

    try {
      const response = await fetch("http://localhost:8787/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message was sent successfully!");
        setResponseColor("green");
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          city: "",
          reason: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setResponseMessage(
          errorData.message || "Something went wrong. Please try again."
        );
        setResponseColor("red");
      }
    } catch (error) {
      setResponseMessage("Failed to connect to server. Try again later.");
      setResponseColor("red");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="py-4 bg-theme" style={{ backgroundColor: "#587653" }}>
        <div className="container">
          <h1 className="text-center text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="container py-5">
        <h1 className="text-center mb-3">We'd Love to Hear From You!</h1>
        <p className="text-center mb-2">
          At TurfEase, we are committed to helping you connect, play, and enjoy.
          Whether you have questions, need assistance, or just want to reach
          out, we’re here to help.
        </p>
        <p className="text-center mb-5">
          Please feel free to get in touch with us using the form below, or use
          the contact details provided to reach out in other ways. Your feedback
          is important to us, and we’d love to hear from you!
        </p>

        {/* Response Message */}
        {responseMessage && (
          <p
            className="text-center"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: responseColor,
            }}
          >
            {responseMessage}
          </p>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="fullname" className="form-label">
                Full Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter Your Name"
                maxLength="55"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone*
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength="70"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City*
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
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
                value={formData.reason}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                   Select Reason 
                </option>
                <option value="Payment_Or_Refund_related_issues">
                  Payment / Refund related issues
                </option>
                <option value="Feedback_regarding_Staff">
                  Feedback regarding Staff
                </option>
                <option value="Feedback_regarding_Venues">
                  Feedback regarding Venues
                </option>
                <option value="Suggestion_Regarding_Anything">
                  Suggestion Regarding Anything
                </option>
                <option value="Other_reason">Other reason</option>
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
                value={formData.message}
                onChange={handleChange}
                maxLength="255"
                placeholder="Enter Message here..."
                required
              ></textarea>
            </div>

            {/* Centered Submit Button */}
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-warning px-5">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
