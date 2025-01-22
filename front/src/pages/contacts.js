import React from "react";
import "../assets/css/contacts.css";
import "../App.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Reach out to us with any questions or
            feedback.
          </p>
        </header>

        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +254 712 345 678
          </p>
          <p>
            <strong>Email:</strong> support@valuemart.com
          </p>
          <p>
            <strong>Address:</strong> ValueMart Plaza, Nairobi, Kenya
          </p>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
