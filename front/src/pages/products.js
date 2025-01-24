import React, { useState } from "react";
import "../assets/css/products.css";
import "../App.css";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Search from "../components/search";
import MiniProducts from "../components/miniProducts";
function Products() {
  const [searchValue, setSearchValue] = useState("");
  //const [activeCategory, setActiveCategory] = useState("officeFurniture");

  return (
    <>
      <div className="navbar-element">
        <Navbar />
      </div>
      <div className="products-container">
        <header className="products-header">
          <h1>Our Products</h1>
          <p>Discover a collection that redefines elegance and comfort.</p>
        </header>{" "}
        <Search
          onSearchChange={(value) => setSearchValue(value)}
          //setActiveCategory={setActiveCategory}
        />
        {searchValue === "" && (
          <div className="mini-navbar-element">
            {/* <MiniProducts activeCategory={activeCategory} /> */}
            <MiniProducts />
          </div>
        )}
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
