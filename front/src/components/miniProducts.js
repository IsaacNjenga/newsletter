import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/miniproducts.css";
import "../assets/css/pages.css";
import "material-icons/iconfont/material-icons.css";
import {
  Card,
  Carousel,
  Image,
  Button,
  Row,
  Col,
  Tag,
  Badge,
  FloatButton,
} from "antd";
import ProductModal from "./productModal.js";
import accessory from "../assets/icons/accessory.png";
import electronics from "../assets/icons/electronics.png";
import homeChair from "../assets/icons/home-chair.png";
import officeChair from "../assets/icons/office-chair.png";
import secondHand from "../assets/icons/second-hand.png";
import axios from "axios";
import Loader from "./loader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import noPic from "../assets/images/nopic.png";
import { format } from "date-fns";

const currentDate = new Date().toISOString().split("T")[0];

function MiniProducts() {
  const hostname = window.location.hostname;

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
      setError("Failed to load data. Please try again refreshing.");
      Swal.fire({
        icon: "warning",
        text: "Failed to load data. Please try again refreshing.",
      });
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
    <div className="mini-products-container">
      <>
        <FloatButton.Group
          shape="circle"
          placement="left"
          style={{
            left: 20,
            right: "auto",
          }}
        >
          <nav
            className={`side-navigation ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            <ul>
              <button
                className="mini-products-toggle-btn"
                onClick={toggleNavbar}
                title={isExpanded ? "Close" : "Expand"}
              >
                <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
              </button>
              <li
                onClick={() =>
                  displaySet("Office Furniture", "Office Furniture")
                }
              >
                <img src={officeChair} alt="office-chair" className="icon" />
                {isExpanded && (
                  <p className="icon-description">Office Furniture</p>
                )}
              </li>
              <li
                onClick={() => displaySet("Home Furniture", "Home Furniture")}
              >
                <img src={homeChair} alt="home-chair" className="icon" />
                {isExpanded && (
                  <p className="icon-description">Home Furniture</p>
                )}
              </li>
              <li onClick={() => displaySet("Electronics", "Electronics")}>
                <img src={electronics} alt="electronics" className="icon" />
                {isExpanded && <p className="icon-description">Electronics</p>}
              </li>
              <li
                onClick={() =>
                  displaySet("Second-Hand Items", "Second Hand Items")
                }
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
          <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
        </FloatButton.Group>
      </>

      {/* <nav
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
      </nav> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="product-page-container">
          <h1 className="product-page-title">{title}</h1>
          <div className="product-page-list">
            <Row gutter={[16, 16]} justify="center">
              {data.map((d) => (
                <Col key={d._id} xs={30} sm={12} md={12} lg={8} xl={6}>
                  <Card
                    hoverable
                    cover={
                      <Badge.Ribbon
                        text="Special Offer!"
                        color="yellow"
                        style={{
                          display:
                            d.hasOffer &&
                            format(new Date(d.offerStartDate), "yyyy-MM-dd") <=
                              currentDate &&
                            format(new Date(d.offerEndDate), "yyyy-MM-dd") >
                              currentDate
                              ? "block"
                              : "none",
                          right: "10px",
                        }}
                      >
                        <Carousel autoplay autoplaySpeed={2500} fade>
                          {Array.isArray(d.image) && d.image.length > 0 ? (
                            d.image.map((imgSrc, index) => (
                              <div key={index}>
                                <Image
                                  height={200}
                                  width="100%"
                                  src={imgSrc}
                                  alt={`Slide ${index + 1}`}
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            ))
                          ) : (
                            <Image
                              height={206}
                              width="100%"
                              src={noPic}
                              alt="No Image Available"
                              style={{
                                objectFit: "contain",
                              }}
                            />
                          )}
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
          </div>
          <ProductModal
            details={details}
            visible={details}
            closeDetailsModal={closeDetailsModal}
          />
        </div>
      )}
    </div>
  );
}

export default MiniProducts;
