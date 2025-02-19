import React, { useState } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const hostname = window.location.hostname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="highlight">Easy</span>
        <span className="highlight2">
          <i>Deal</i>
        </span>{" "}
        Furnitures
      </div>
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {hostname === "admin.localhost" ? (
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
