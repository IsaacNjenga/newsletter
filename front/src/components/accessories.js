import React, { useState } from "react";
import Modal from "./modal";
import { accessoriesData } from "../assets/data/data";
import { Carousel } from "antd";
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
