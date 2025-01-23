import React from "react";
import sofa from "../assets/images/sofa.jpg";
import coffee from "../assets/images/coffee.webp";
import recliner from "../assets/images/recliner.jpg";

function OfficeChairs() {
  return (
    <div>
      OfficeChairs
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
    </div>
  );
}

export default OfficeChairs;
