import React from "react";
import "../assets/css/modal.css";
import { Carousel } from "antd";
import { format } from "date-fns";
import CountDown from "./countDown";

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
          <div className="carousel-slide-modal">
            <Carousel arrows fade autoplay autoplaySpeed={2500}>
              {details.image.map((imgSrc, index) => (
                <div key={index}>
                  <img
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="modal-pricing">
            {details.hasDiscount ? (
              <div className="price-details">
                <span>
                  <p className="modal-original-price">Ksh. {details.price}</p>{" "}
                  <p className="modal-discount">{details.discount}% Off</p>
                </span>{" "}
                <p className="modal-new-price">
                  Ksh. {((100 - details.discount) / 100) * details.price}
                </p>
              </div>
            ) : (
              <p className="modal-price">Ksh. {details.price}</p>
            )}
          </div>
          <p className="modal-description">{details.description}</p>
          {details.hasOffer && (
            <p className="modal-offer">{details.offerDescription}</p>
          )}
          <CountDown
            startTime={details.offerStartDate}
            endTime={details.offerEndDate}
          />{" "}
          <p className="modal-dates">
            Offer running from{" "}
            <strong>{format(new Date(details.offerStartDate), "PPPP")}</strong>{" "}
            to <strong>{format(new Date(details.offerEndDate), "PPPP")}</strong>
          </p>
          <div className="modal-colors">
            <p>Available Colours:</p>
            <div className="color-palette">
              {details.availableColours.map((color, index) => (
                <div
                  key={index}
                  className="color-box"
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>
          <p className="modal-status">
            <strong>Status:</strong> {details.status}
          </p>
          {details.tags.map((t, index) => (
            <div key={index} className="modal-tags-div">
              <p className="modal-tags">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
