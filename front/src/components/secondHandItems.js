import React, { useState } from "react";
import Modal from "./modal";
import { secondHandItemsData } from "../assets/data/data.js";
import { Carousel } from "antd";

function SecondHandItems() {
  const [details, setDetails] = useState(null);

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = secondHandItemsData.find((d) => d.id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Second Hand Items</h1>
        <div className="product-page-list">
          {secondHandItemsData.map((d) => (
            <div key={d.id} className="product-page-card">
              <div className="carousel-slide">
                <Carousel autoplay autoplaySpeed={2000} fade>
                  {d.image.map((imgSrc, index) => (
                    <div key={index}>
                      <img
                        src={imgSrc}
                        alt={"Slide ${index +1"}
                        className="product-page-image"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>
                <p className="product-page-condition">
                  Condition: {d.condition}
                </p>
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

export default SecondHandItems;
