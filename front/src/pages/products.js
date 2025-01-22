import React from "react";
import sofa from "../assets/images/sofa.jpg";
import coffee from "../assets/images/coffee.webp";
import recliner from "../assets/images/recliner.jpg";
import "../assets/css/products.css";
import "../App.css";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Search from "../components/search";
import MiniProducts from "../components/miniProducts";
function Products() {
  return (
    <>
      <Navbar />
      <Search />
      <div className="products-container">
        <header className="products-header">
          <h1>Our Products</h1>
          <p>Discover a collection that redefines elegance and comfort.</p>
        </header>
        <MiniProducts />
        <section className="product-list">
          <div className="product-card">
            <img src={sofa} alt="Modern Sofa Set" />
            <h3>Modern Sofa Set</h3>
            <p>Ksh. 79,900</p>
          </div>
          <div className="product-card">
            <img src={coffee} alt="Glass Coffee Table" />
            <h3>Glass Coffee Table</h3>
            <p>Ksh. 19,900</p>
          </div>
          <div className="product-card">
            <img src={recliner} alt="Recliner Chair" />
            <h3>Recliner Chair</h3>
            <p>Ksh. 49,900</p>
          </div>
        </section>

        <section className="special-note">
          <p>
            Can't find what you're looking for? We also take custom orders to
            bring your unique furniture ideas to life!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Products;
