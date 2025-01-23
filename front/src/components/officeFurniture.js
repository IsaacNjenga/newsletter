import React from "react";
import seater from "../assets/images/2seater.jpg";
import drawer from "../assets/images/4 drawer.jpg";
import adjust from "../assets/images/adjust.jpg";
import bookshelf from "../assets/images/bookshelf.webp";
import conference from "../assets/images/conference.webp";
import cornerDesk from "../assets/images/corner-desk.webp";
import ergonomic from "../assets/images/ergonomic.webp";
import officeChair from "../assets/images/office chair.webp";
import receptionDesk from "../assets/images/reception-desk.jpg";
import round from "../assets/images/round.jpg";
import "../assets/css/pages.css";
function OfficeChairs() {
  const data = [
    {
      id: 1,
      image: officeChair,
      name: "Executive Office Chair",
      price: "Ksh. 29,900",
    },
    {
      id: 2,
      image: cornerDesk,
      name: "Corner Computer Desk",
      price: "Ksh. 39,900",
    },
    {
      id: 3,
      image: conference,
      name: "Conference Table",
      price: "Ksh. 99,900",
    },
    {
      id: 4,
      image: ergonomic,
      name: "Ergonomic Office Chair",
      price: "Ksh. 49,900",
    },
    {
      id: 5,
      image: bookshelf,
      name: "5-Shelf Bookcase",
      price: "Ksh. 19,900",
    },
    {
      id: 6,
      image: drawer,
      name: "4-Drawer Filing Cabinet",
      price: "Ksh. 29,900",
    },
    {
      id: 7,
      image: seater,
      name: "2-Seater Office Sofa",
      price: "Ksh. 59,900",
    },
    {
      id: 8,
      image: receptionDesk,
      name: "Reception Desk with Storage",
      price: "Ksh. 79,900",
    },
    {
      id: 9,
      image: round,
      name: "Round Meeting Table",
      price: "Ksh. 69,900",
    },
    {
      id: 10,
      image: adjust,
      name: "Adjustable Office Stool",
      price: "Ksh. 14,900",
    },
  ];
  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Office Furniture</h1>
        <div className="product-page-list">
          {data.map((d) => (
            <div key={d.id} className="product-page-card">
              <img src={d.image} alt={d.name} className="product-page-image" />
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OfficeChairs;
