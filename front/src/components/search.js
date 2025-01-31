import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/search.css";
import "../assets/css/pages.css";
import ProductModal from "./productModal.js";
import { Card, Carousel, Image, Button, Row, Col } from "antd";
import axios from "axios";
import Loader from "./loader";
import Swal from "sweetalert2";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [details, setDetails] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Office Furniture");

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
      Swal.fire({ icon: "warning", text: error });
    } finally {
      setLoading(false);
    }
  };

  // const categoryDataMap = {
  //   officeFurniture: activeCategory,
  //   homeFurniture: homeFurnitureData,
  //   electronics: electronicsData,
  //   secondHandItems: secondHandItemsData,
  //   accessories: accessoriesData,
  // };

  //search.trim() === "" ? []:categoryDataMap[activeCategory] => was using this for JSON data

  useEffect(() => {
    fetchCategoryData(activeCategory);
  }, [activeCategory]);

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

  const filteredData = data.filter((item) =>
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
    const filteredItem = filteredData.find((d) => d._id === id);
    if (filteredItem) {
      setDetails(filteredItem);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="search-container">
        <form className="search-form">
          <select
            className="category-dropdown"
            value={activeCategory}
            onChange={handleCategoryChange}
          >
            <option value="Office Furniture">Office Furniture</option>
            <option value="Home Furniture">Home Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Second-Hand Items">Second Hand Items</option>
            <option value="Accessories">Accessories</option>
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
        <div className="product-page-container">
          <div className="product-page-list">
            <Row gutter={[16, 16]} justify="center">
              {filteredData.map((d) => (
                <Col key={d._id} xs={30} sm={12} md={8} lg={6} xl={6}>
                  <Card
                    hoverable
                    cover={
                      <Carousel autoplay autoplaySpeed={2500} fade>
                        {d.image.map((imgSrc, index) => (
                          <div key={index}>
                            <Image
                              height={250}
                              src={imgSrc}
                              alt={`Slide ${index + 1}`}
                              style={{
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    }
                    style={{
                      width: 300,
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Meta
                      title={d.name}
                      description={
                        <p className="card-price">
                          Ksh. {Number(d.price).toLocaleString()}
                        </p>
                      }
                    />
                    <Button
                      type="primary"
                      block
                      style={{ marginTop: "8px" }}
                      onClick={() => viewDetails(d._id)}
                    >
                      View Details
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
            {filteredData.length === 0 && (
              <p className="no-results">No results found for "{search}"</p>
            )}
          </div>
        </div>
      )}
      <ProductModal
        details={details}
        visible={details}
        closeDetailsModal={closeDetailsModal}
      />
    </>
  );
}

export default Search;
