import React from "react";
import {
  Modal,
  Carousel,
  Tag,
  Typography,
  Row,
  Col,
  Image,
  Divider,
  Button,
  Badge,
  Alert,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import CountDownToEnd from "./countDownToEnd";
import CountDownToStart from "./countDownToStart";
import "../assets/css/productModal.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import noPic from "../assets/images/nopic.png";

const { Title, Text } = Typography;
const currentDate = new Date().toISOString().split("T")[0];

function ProductModal({ details, visible, closeDetailsModal }) {
  const hostname = window.location.hostname;
  if (!details) return null;

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
          axios.delete(`delete-product?id=${id}`).then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Deleted Successfully",
              icon: "success",
            });
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "An error occured",
          icon: "error",
        });
        console.log(err);
      });
  };

  return (
    <Modal
      open={visible}
      onCancel={closeDetailsModal}
      footer={null}
      centered
      width={1200}
      height={400}
      className="custom-modal"
    >
      {details.hasOffer &&
        currentDate < format(new Date(details.offerEndDate), "yyyy-MM-dd") && (
          <Badge.Ribbon
            text={details.offerDescription}
            color="yellow"
            style={{
              display: details.hasOffer ? "block" : "none",
              right: "10px",
            }}
          ></Badge.Ribbon>
        )}
      <Row gutter={24}>
        {/* Left Side: Image Carousel */}
        <Col xs={24} md={10}>
          {/* Offer Countdown & Dates */}
          {format(new Date(details.offerStartDate), "yyyy-MM-dd") >
          currentDate ? (
            <CountDownToStart startTime={details.offerStartDate} />
          ) : format(new Date(details.offerEndDate), "yyyy-MM-dd") >
            currentDate ? (
            <CountDownToEnd endTime={details.offerEndDate} />
          ) : null}

          <Carousel autoplay autoplaySpeed={2500} effect="fade" arrows>
            {Array.isArray(details.image) && details.image.length > 0 ? (
              details.image.map((imgSrc, index) => (
                <div key={index}>
                  <Image
                    height={350}
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
                height={350}
                width="100%"
                src={noPic}
                alt="No Image Available"
                style={{
                  objectFit: "contain",
                }}
              />
            )}
          </Carousel>
        </Col>

        {/* Right Side: Product Details */}
        <Col xs={24} md={14}>
          {" "}
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
                <Link to={`/update-product/${details._id}`}>
                  <EditOutlined />
                </Link>
              </Button>{" "}
              <Button
                type="primary"
                color="red"
                variant="solid"
                style={{ marginTop: "8px" }}
                title="Delete"
                onClick={() => handleDelete(details._id)}
              >
                <DeleteOutlined />
              </Button>
            </>
          ) : null}
          {/* Product Name */}
          <Title level={1}>{details.name}</Title>
          {/* Pricing */}
          <div className="modal-pricing">
            {details.hasDiscount && details.discount > 0 ? (
              <div className="price-details">
                {" "}
                <Text color="red">
                  <strong
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontSize: "1.75rem",
                    }}
                  >
                    Ksh. {Number(details.price).toLocaleString()}
                  </strong>
                </Text>{" "}
                <Tag color="yellow">{details.discount}% Off</Tag>
                <br />
                <Text type="success">
                  <strong style={{ colour: "green", fontSize: "2.8rem" }}>
                    Ksh.{" "}
                    {Number(
                      ((100 - details.discount) / 100) * details.price
                    ).toLocaleString()}
                  </strong>
                  <Alert
                    type="success"
                    showIcon
                    message={`Save Ksh. ${(
                      Number(details.price) *
                      (Number(details.discount) / 100)
                    )
                      .toFixed(2)
                      .toLocaleString()}`}
                    style={{ width: "30%", color: "#4bbe11" }}
                  />
                </Text>
              </div>
            ) : (
              <Text type="success">
                <strong style={{ colour: "green", fontSize: "3rem" }}>
                  Ksh. {Number(details.price).toLocaleString()}
                </strong>
              </Text>
            )}
          </div>
          {/* Description */}
          <Text>{details.description}</Text>
          <br />
          {details.hasOffer &&
            currentDate <
              format(new Date(details.offerEndDate), "yyyy-MM-dd") && (
              <Text>
                {" "}
                (Offer running from{" "}
                <strong>
                  {format(new Date(details.offerStartDate), "PPPP")}
                </strong>{" "}
                to{" "}
                <strong>
                  {format(new Date(details.offerEndDate), "PPPP")}
                </strong>
                )
              </Text>
            )}
          <Divider />
          {/* Available Colors */}
          <Text strong>Available Colors:</Text>
          <Row gutter={[8, 8]}>
            {details.availableColours.map((color, index) => (
              <Col key={index}>
                <div
                  style={{
                    backgroundColor: color,
                    width: "30px",
                    height: "28px",
                    borderRadius: "4px",
                    border: "1.3px solid white",
                  }}
                  title={color}
                ></div>
              </Col>
            ))}
          </Row>
          <Divider />
          {/* Status & Tags */}
          <Text strong>Status:</Text> <Text>{details.status}</Text>
          <div className="modal-tags-div">
            {details.tags.map((tag, index) => (
              <Tag key={index} color="blue">
                {tag}
              </Tag>
            ))}
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ProductModal;
