import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/search.css";
import {
  officeFurnitureData,
  homeFurnitureData,
  electronicsData,
  secondHandItemsData,
  accessoriesData,
} from "../assets/data/data";
import Modal from "./modal";
import { Carousel } from "antd";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState(null);
  const [activeCategory, setActiveCategory] = useState("officeFurniture");

  const categoryDataMap = {
    officeFurniture: officeFurnitureData,
    homeFurniture: homeFurnitureData,
    electronics: electronicsData,
    secondHandItems: secondHandItemsData,
    accessories: accessoriesData,
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const filteredData =
    search.trim() === ""
      ? []
      : categoryDataMap[activeCategory].filter((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(search.toLowerCase())
          )
        );

  const closeDetailsModal = () => {
    setDetails(null);
  };

  const viewDetails = (id) => {
    const filteredItem = filteredData.find((d) => d.id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <select
            className="category-dropdown"
            value={activeCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category to search</option>
            <option value="officeFurniture">Office Furniture</option>
            <option value="homeFurniture">Home Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="secondHandItems">Second Hand Items</option>
            <option value="accessories">Accessories</option>
          </select>
          <InputGroup>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <Form.Control
              onChange={handleSearchChange}
              placeholder="I am looking for..."
              className="search-bar"
            />
          </InputGroup>
        </form>
      </div>
      {search && (
        <h3>
          Results for "{search}" in {activeCategory}
        </h3>
      )}
      {search && (
        <div className="search-results">
          {filteredData.map((filteredData) => (
            <div key={filteredData.id} className="search-product-page-card">
              <div className="carousel-slide">
                <Carousel autoplay autoplaySpeed={2000} fade>
                  {filteredData.image.map((imgSrc, index) => (
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
              <div className="search-product-page-info">
                <h3 className="search-product-page-name">
                  {filteredData.name}
                </h3>
                <p className="search-product-page-price">
                  {filteredData.price}
                </p>{" "}
                <button
                  onClick={() => {
                    viewDetails(filteredData.id);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <p className="no-results">No results found for "{search}"</p>
          )}
        </div>
      )}
      <Modal details={details} closeDetailsModal={closeDetailsModal} />
    </>
  );
}

export default Search;
