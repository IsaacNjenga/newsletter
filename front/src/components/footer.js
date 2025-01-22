import React from "react";
import "../assets/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 ValueMart. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
