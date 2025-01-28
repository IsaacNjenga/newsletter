import React from "react";
import "../assets/css/home.css";
import Navbar from "../components/navbar";
import "../App.css";

import coffee from "../assets/images/coffee.webp";
import luxury from "../assets/images/luxury.webp";
import outdoor from "../assets/images/outdoor.webp";
import recliner from "../assets/images/recliner.jpg";
import sofa from "../assets/images/sofa.jpg";
import wooden from "../assets/images/wooden.jpg";
import Footer from "../components/footer";
// import FetchApi from "../assets/data/fetchApi";
import AddProduct from "../components/addProduct";

function Home() {
  return (
    <>
      <div className="navbar-element">
        <Navbar />
      </div>

      <div className="home-container">
        <header className="hero-section">
          <h1 className="hero-title">Welcome to ValueMart Furniture</h1>
          <p className="hero-subtitle">Exclusive Deals on Elegant Furniture</p>
          <button className="cta-button">Subscribe Now</button>
        </header>
        <AddProduct />
        {/* <FetchApi /> */}
        <section className="new-arrivals">
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={sofa}
                  alt="Modern Sofa Set"
                  className="home-product-image"
                />
              </div>
              <h3>Modern Sofa Set</h3>
              <p>Ksh.79,900</p>
            </div>
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={coffee}
                  alt="Glass Coffee Table"
                  className="home-product-image"
                />
              </div>
              <h3>Glass Coffee Table</h3>
              <p>Ksh.19,900</p>
            </div>
          </div>
        </section>

        <section className="discounts">
          <h2 className="section-title">Discounted Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={recliner}
                  alt="Recliner Chair"
                  className="home-product-image"
                />
              </div>
              <h3>Recliner Chair</h3>
              <p>
                <span className="discounted">Ksh.59,900</span> Ksh.49,900
              </p>
            </div>
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={wooden}
                  alt="Wooden Dining Set"
                  className="home-product-image"
                />
              </div>
              <h3>Wooden Dining Set</h3>
              <p>
                <span className="discounted">Ksh.12,990</span> Ksh.9,990
              </p>
            </div>
          </div>
        </section>

        <section className="special-offers">
          <h2 className="section-title">Special Offers</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={outdoor}
                  alt="Outdoor Lounge Set"
                  className="home-product-image"
                />
              </div>
              <h3>Outdoor Lounge Set</h3>
              <p>Ksh.6,990</p>
              <p>Free Delivery</p>
            </div>
            <div className="product-card">
              <div className="home-image-placeholder">
                <img
                  src={luxury}
                  alt="Luxury Office Chair"
                  className="home-product-image"
                />
              </div>
              <h3>Luxury Office Chair</h3>
              <p>Ksh.3,490</p>
              <p>Buy One Get One Free</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
