import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTv,
  faRecycle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { MdElectricalServices } from "react-icons/md";
import { PiOfficeChairLight } from "react-icons/pi";
import "../assets/css/miniproducts.css";
import "../assets/css/pages.css";
import "material-icons/iconfont/material-icons.css";
import {
  accessoriesData,
  electronicsData,
  homeFurnitureData,
  officeFurnitureData,
  secondHandItemsData,
} from "../assets/data/data";
import { Carousel } from "antd";
import Modal from "./modal";

function MiniProducts() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [data, setData] = useState(officeFurnitureData);
  const [title, setTitle] = useState("Office Furniture");
  const [details, setDetails] = useState(null);

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = data.find((d) => d.id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const displaySet = (setter) => {
    if (setter === "office-chairs") {
      setData(officeFurnitureData);
      setTitle("Office Furniture");
    } else if (setter === "home-furniture") {
      setData(homeFurnitureData);
      setTitle("Home Furniture");
    } else if (setter === "electronics") {
      setData(electronicsData);
      setTitle("Electronics");
    } else if (setter === "second-hand-items") {
      setData(secondHandItemsData);
      setTitle("Second Hand Items");
    } else if (setter === "accessories") {
      setData(accessoriesData);
      setTitle("Accessories");
    }
  };

  return (
    <div className="mini-products-container">
      <nav
        className={`side-navigation ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <ul>
          <button className="mini-products-toggle-btn" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
          </button>
          <li onClick={() => displaySet("office-chairs")}>
            <PiOfficeChairLight className="icon" />
            {isExpanded && <p className="icon-description">Office Furniture</p>}
          </li>
          <li onClick={() => displaySet("home-furniture")}>
            <FontAwesomeIcon icon={faCouch} className="icon" />
            {isExpanded && <p className="icon-description">Home Furniture</p>}
          </li>
          <li onClick={() => displaySet("electronics")}>
            <FontAwesomeIcon icon={faTv} className="icon" />
            {isExpanded && <p className="icon-description">Electronics</p>}
          </li>
          <li onClick={() => displaySet("second-hand-items")}>
            <FontAwesomeIcon icon={faRecycle} className="icon" />
            {isExpanded && (
              <p className="icon-description">Second-Hand Items</p>
            )}
          </li>
          <li onClick={() => displaySet("accessories")}>
            <MdElectricalServices className="icon" />
            {isExpanded && <p className="icon-description">Accessories</p>}
          </li>
        </ul>
      </nav>
      {data && (
        <div className="product-page-container">
          <h1 className="product-page-title">{title}</h1>
          <div className="product-page-list">
            {data.map((d) => (
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
      )}
    </div>
  );
}

export default MiniProducts;
