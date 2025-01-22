import React, { useState } from "react";
import "../assets/css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">ValueMart</div>
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/offers">Offers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
