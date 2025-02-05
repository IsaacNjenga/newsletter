import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/search.css";
import "../assets/css/pages.css";
import ProductModal from "./productModal.js";
import { Card, Carousel, Image, Button, Row, Col, Badge, Tag } from "antd";
import axios from "axios";
import Loader from "./loader";
import Swal from "sweetalert2";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Search({ onSearchChange }) {
  const hostname = window.location.hostname;
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          axios.delete(`delete-product?id=${id}`).then((res) => {
            setData(res.data.products);
            setLoading(false);
            Swal.fire({
              title: "Deleted!",
              text: "Deleted Successfully",
              icon: "success",
            });
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: "An error occured",
          icon: "error",
        });
        console.log(err);
      });
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
                <Col key={d._id} xs={30} sm={12} md={12} lg={8} xl={6}>
                  <Card
                    hoverable
                    cover={
                      <Badge.Ribbon
                        text="Special Offer"
                        color="yellow"
                        style={{
                          display: d.hasOffer ? "block" : "none",
                          right: "10px",
                        }}
                      >
                        <Carousel autoplay autoplaySpeed={2500} fade>
                          {d.image.map((imgSrc, index) => (
                            <div key={index}>
                              <Image
                                height={300}
                                width={`100%`}
                                src={imgSrc}
                                alt={`Slide ${index + 1}`}
                                style={{
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </Badge.Ribbon>
                    }
                    style={{
                      width: 300,
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "whitesmoke",
                      border: "1px solid lightgrey",
                    }}
                  >
                    <Card.Meta title={<h3>{d.name}</h3>} />
                    <Card.Meta
                      description={
                        d.hasDiscount ? (
                          <p>
                            <strong
                              style={{
                                color: "red",
                                textDecoration: "line-through",
                                fontSize: "1rem",
                              }}
                            >
                              Ksh. {Number(d.price).toLocaleString()}
                            </strong>{" "}
                            <strong
                              style={{ colour: "green", fontSize: "1.2rem" }}
                              className="card-price"
                            >
                              Ksh.{" "}
                              {Number(
                                ((100 - d.discount) / 100) * d.price
                              ).toLocaleString()}
                            </strong>
                          </p>
                        ) : (
                          <p className="card-price">
                            <strong
                              style={{ colour: "green", fontSize: "1.2rem" }}
                            >
                              Ksh. {Number(d.price).toLocaleString()}
                            </strong>
                          </p>
                        )
                      }
                    />
                    <Button
                      type="primary"
                      block
                      style={{ marginTop: "8px", marginBottom: "14px" }}
                      onClick={() => viewDetails(d._id)}
                    >
                      View Details
                    </Button>{" "}
                    <br />
                    <Card.Meta
                      description={d.tags.map((t, index) => (
                        <React.Fragment key={index}>
                          <Tag color="blue">{t}</Tag>
                          {index < d.tags.length - 1 && (
                            <span
                              style={{
                                fontSize: "1.1rem",
                                marginRight: "8px",
                                color: "#1678ff",
                              }}
                            >
                              •
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    />
                    {hostname === "admin.localhost" ||
                    hostname === "admin.valuemartfurniture.vercel.app" ? (
                      <>
                        {" "}
                        <Button
                          type="primary"
                          color="blue"
                          style={{ marginTop: "7px" }}
                          title="Edit"
                        >
                          <Link to={`/update-product/${d._id}`}>
                            <EditOutlined />
                          </Link>
                        </Button>{" "}
                        <Button
                          type="primary"
                          color="red"
                          variant="solid"
                          style={{ marginTop: "8px" }}
                          title="Delete"
                          onClick={() => handleDelete(d._id)}
                        >
                          <DeleteOutlined />
                        </Button>
                      </>
                    ) : null}
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
