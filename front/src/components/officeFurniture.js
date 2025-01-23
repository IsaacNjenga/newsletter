import React, { useState } from "react";
import "../assets/css/pages.css";
import Modal from "./modal";
import { officeFurnitureData } from "../assets/data/data";
function OfficeChairs() {
  const [details, setDetails] = useState(null);

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = officeFurnitureData.find((d) => d.id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Office Furniture</h1>
        <div className="product-page-list">
          {officeFurnitureData.map((d) => (
            <div key={d.id} className="product-page-card">
              <img src={d.image} alt={d.name} className="product-page-image" />
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>
                <button
                  onClick={() => {
                    viewDetails(d.id);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal details={details} closeDetailsModal={closeDetailsModal} />
      </div>
    </>
  );
}

export default OfficeChairs;
