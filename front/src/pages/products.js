import React from "react";
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
      <div className="products-container">
        <header className="products-header">
          <h1>Our Products</h1>
          <p>Discover a collection that redefines elegance and comfort.</p>
        </header>
        <Search />
        <MiniProducts />

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
