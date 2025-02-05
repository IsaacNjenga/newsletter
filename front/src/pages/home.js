import React, { useCallback, useEffect, useState } from "react";
import "../assets/css/home.css";
import Navbar from "../components/navbar";
import "../App.css";

import Footer from "../components/footer";
import {
  FloatButton,
  Row,
  Card,
  Col,
  Button,
  Badge,
  Tag,
  Carousel,
  Image,
} from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../components/loader.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductModal from "../components/productModal";
import Offers from "./offers";

function Home() {
  const hostname = window.location.hostname;
  const [loading, setLoading] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);
  const [discounted, setDiscounted] = useState([]);
  const [offered, setOffered] = useState([]);
  const [details, setDetails] = useState(null);

  const fetchedItems = useCallback(async () => {
    setLoading(true);
    try {
      const url = `get-all-products`;
      const res = await axios.get(url);
      if (res.data.success) {
        const arrivals = res.data.allProducts.filter(
          (arrival) => arrival.status === "Brand New"
        );
        const discounts = res.data.allProducts.filter(
          (discount) => discount.hasDiscount === true
        );
        const offers = res.data.allProducts.filter(
          (offer) => offer.hasOffer === true
        );
        setNewArrivals(arrivals);
        setDiscounted(discounts);
        setOffered(offers);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "warning",
        text: "There seems to be an error. Kindly refresh the page",
      });
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchedItems();
  }, []);

  const viewDetails = (data, id) => {
    if (!data || typeof data !== "object") {
      console.warn("Invalid data object");
      return;
    }
    if (String(data._id) === String(id)) {
      setDetails(data);
    } else {
      console.warn("No matching item found");
    }
  };

  const closeDetailsModal = () => {
    setDetails(null);
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
      <>
        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
        </FloatButton.Group>
      </>
      <div className="navbar-element">
        <Navbar />
      </div>
      <div className="home-container">
        <header className="hero-section">
          <h1 className="hero-title">Welcome to ValueMart Furniture</h1>
          <p className="hero-subtitle">Exclusive Deals on Elegant Furniture</p>
          {/* <button className="cta-button">Subscribe Now</button> */}
        </header>

        <section className="new-arrivals">
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            <div className="product-page-list">
              <Row gutter={[16, 16]} justify="center">
                {newArrivals.map((d) => (
                  <Col key={d._id} xs={30} sm={12} md={12} lg={8} xl={6}>
                    <Card
                      hoverable
                      cover={
                        <Badge.Ribbon
                          text="Brand New"
                          color="orange"
                          style={{
                            display:
                              d.status === "Brand New" ? "block" : "none",
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
                        onClick={() => viewDetails(d, d._id)}
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
            </div>
          </div>
        </section>

        <section className="discounts">
          <h2 className="section-title">Discounted Products</h2>
          <div className="product-grid">
            <div className="product-page-list">
              <Row gutter={[16, 16]} justify="center">
                {discounted.map((d) => (
                  <Col key={d._id} xs={30} sm={12} md={12} lg={8} xl={6}>
                    <Card
                      hoverable
                      cover={
                        <Badge.Ribbon
                          text={`${d.discount}% off`}
                          color="red"
                          style={{
                            display: d.hasDiscount ? "block" : "none",
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
                        onClick={() => viewDetails(d, d._id)}
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
            </div>
          </div>
        </section>

        <section className="special-offers">
          <h2 className="section-title">Special Offers</h2>
          <div className="product-grid">
            <Row gutter={[16, 16]} justify="center">
              {offered.map((d) => (
                <Col key={d._id} xs={30} sm={12} md={12} lg={8} xl={6}>
                  <Card
                    hoverable
                    cover={
                      <Badge.Ribbon
                        text={d.offerDescription}
                        color="green"
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
                      onClick={() => viewDetails(d, d._id)}
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
          </div>
        </section>
        <ProductModal
          details={details}
          visible={details}
          closeDetailsModal={closeDetailsModal}
        />
        <Offers offered={offered} />

        <Footer />
      </div>
    </>
  );
}

export default Home;
