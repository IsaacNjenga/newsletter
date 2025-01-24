import React from "react";
import "../assets/css/modal.css";
import { Carousel } from "antd";

function Modal({ details, closeDetailsModal }) {
  if (!details) return null;

  return (
    <div className="modal-overlay" onClick={closeDetailsModal}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={closeDetailsModal}>
          &times;
        </button>
        <div className="modal-body">
          <h1 className="modal-title">{details.name}</h1>
          <div className="carousel-slide">
            <Carousel arrows fade>
              {details.image.map((imgSrc, index) => (
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
          <p className="modal-price">{details.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
