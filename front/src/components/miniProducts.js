import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/miniproducts.css";
import "../assets/css/pages.css";
import "material-icons/iconfont/material-icons.css";
import { Carousel } from "antd";
import Modal from "./modal";
import accessory from "../assets/icons/accessory.png";
import electronics from "../assets/icons/electronics.png";
import homeChair from "../assets/icons/home-chair.png";
import officeChair from "../assets/icons/office-chair.png";
import secondHand from "../assets/icons/second-hand.png";
import axios from "axios";
import Loader from "./loader";

function MiniProducts() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Office Furniture");
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCategoryData = async (category) => {
    setLoading(true);
    setError("");
    try {
      const url = `get-product?category=${encodeURIComponent(category)}`;      
      const response = await axios.get(url);      
      setData(response.data.product);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = data.find((d) => d._id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const displaySet = (category, categoryName) => {
    setTitle(categoryName);
    fetchCategoryData(category);
  };

  useEffect(() => {
    fetchCategoryData("Office Furniture");
  }, []);

  return (
    <div className="mini-products-container">
      <nav
        className={`side-navigation ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <ul>
          <button className="mini-products-toggle-btn" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
          </button>
          <li
            onClick={() => displaySet("Office Furniture", "Office Furniture")}
          >
            <img src={officeChair} alt="office-chair" className="icon" />
            {isExpanded && <p className="icon-description">Office Furniture</p>}
          </li>
          <li onClick={() => displaySet("Home Furniture", "Home Furniture")}>
            <img src={homeChair} alt="home-chair" className="icon" />
            {isExpanded && <p className="icon-description">Home Furniture</p>}
          </li>
          <li onClick={() => displaySet("Electronics", "Electronics")}>
            <img src={electronics} alt="electronics" className="icon" />
            {isExpanded && <p className="icon-description">Electronics</p>}
          </li>
          <li
            onClick={() => displaySet("Second-Hand Items", "Second Hand Items")}
          >
            <img src={secondHand} alt="second-hand" className="icon" />
            {isExpanded && (
              <p className="icon-description">Second-Hand Items</p>
            )}
          </li>
          <li onClick={() => displaySet("Accessories", "Accessories")}>
            <img src={accessory} alt="accessory" className="icon" />
            {isExpanded && <p className="icon-description">Accessories</p>}
          </li>
        </ul>
      </nav>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="product-page-container">
          <h1 className="product-page-title">{title}</h1>
          <div className="product-page-list">
            {data.map((d) => (
              <div key={d._id} className="product-page-card">
                <div className="carousel-slide">
                  <Carousel autoplay autoplaySpeed={2000} fade>
                    {d.image.map((imgSrc, index) => (
                      <div key={index}>
                        <img
                          src={imgSrc}
                          alt={`Slide ${index + 1}`}
                          className="product-page-image"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="product-page-info">
                  <h3 className="product-page-name">{d.name}</h3>
                  <p className="product-page-price">${d.price}</p>
                  <button
                    onClick={() => {
                      viewDetails(d._id);
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
