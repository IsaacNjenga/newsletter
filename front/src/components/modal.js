import React from "react";
import "../assets/css/modal.css";

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
          <img src={details.image} alt={details.name} className="modal-image" />
          <p className="modal-price">{details.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
