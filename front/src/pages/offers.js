import React, { useCallback, useEffect, useState } from "react";
import "../assets/css/offers.css";
import "../App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";

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
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductModal from "../components/productModal";
import axios from "axios";
import Loader from "../components/loader.js";
import Swal from "sweetalert2";

function Offers() {
  const hostname = window.location.hostname;
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offered, setOffered] = useState([]);

  const fetchedItems = useCallback(async () => {
    setLoading(true);
    try {
      const url = `get-all-products`;
      const res = await axios.get(url);
      if (res.data.success) {
        const offers = res.data.allProducts.filter(
          (offer) => offer.hasOffer === true
        );

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
      <Search />
      <div className="offers-container">
        <header className="offers-header">
          <h1>Special Offers</h1>
          <p>Exclusive deals to elevate your home without breaking the bank.</p>
        </header>

        <section className="offers-list">
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
          </div>{" "}
          <ProductModal
            details={details}
            visible={details}
            closeDetailsModal={closeDetailsModal}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Offers;
