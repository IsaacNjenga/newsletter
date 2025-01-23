import React, { useState } from "react";
import Modal from "./modal";
import { accessoriesData } from "../assets/data/data";
function Accessories() {
  const [details, setDetails] = useState(null);

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = accessoriesData.find((d) => d.id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Accessories</h1>
        <div className="product-page-list">
          {accessoriesData.map((d) => (
            <div key={d.id} className="product-page-card">
              <img src={d.image} alt={d.name} className="product-page-image" />
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>{" "}
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

export default Accessories;
