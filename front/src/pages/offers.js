import React from "react";
import recliner from "../assets/images/recliner.jpg";
import wooden from "../assets/images/wooden.jpg";
import luxury from "../assets/images/luxury.webp";
import "../assets/css/offers.css";
import "../App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";

function Offers() {
  return (
    <>
      <Navbar />
      <Search />
      <div className="offers-container">
        <header className="offers-header">
          <h1>Special Offers</h1>
          <p>Exclusive deals to elevate your home without breaking the bank.</p>
        </header>

        <section className="offers-list">
          <div className="offer-card">
            <img src={recliner} alt="Recliner Chair" />
            <h3>Recliner Chair</h3>
            <p>
              <span className="discounted">Ksh. 59,900</span> Ksh. 49,900
            </p>
            <button className="buy-now-button">Buy Now</button>
          </div>
          <div className="offer-card">
            <img src={wooden} alt="Wooden Dining Set" />
            <h3>Wooden Dining Set</h3>
            <p>
              <span className="discounted">Ksh. 12,990</span> Ksh. 9,990
            </p>
            <button className="buy-now-button">Buy Now</button>
          </div>
          <div className="offer-card">
            <img src={luxury} alt="Luxury Office Chair" />
            <h3>Luxury Office Chair</h3>
            <p>Ksh. 3,490</p>
            <p>Buy One Get One Free</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Offers;
