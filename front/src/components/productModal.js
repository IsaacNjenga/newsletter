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
} from "antd";
import { format } from "date-fns";
import CountDownToEnd from "./countDownToEnd";
import CountDownToStart from "./countDownToStart";
import "../assets/css/productModal.css";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const currentDate = new Date().toISOString().split("T")[0];

function ProductModal({ details, visible, closeDetailsModal }) {
  if (!details) return null;

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
      <Row gutter={24}>
        {/* Left Side: Image Carousel */}
        <Col xs={24} md={10}>
          {" "}
          {/* Countdown Timer */}
          <CountDownToStart startTime={details.offerStartDate} />
          <Carousel autoplay autoplaySpeed={2500} effect="fade" arrows>
            {details.image.map((imgSrc, index) => (
              <div key={index}>
                <Image
                  width="100%"
                  height="400px"
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
          {/* Offer Countdown & Dates */}
          <CountDownToEnd endTime={details.offerEndDate} />
        </Col>

        {/* Right Side: Product Details */}
        <Col xs={24} md={14}>
          <Button type="default" style={{ marginTop: "25px" }}>
            <Link to={`/update-product/${details._id}`}>Update Item</Link>
          </Button>
          {/* Product Name */}
          <Title level={1}>{details.name}</Title>
          {/* Pricing */}
          <div className="modal-pricing">
            {details.hasDiscount && details.discount > 0 ? (
              <div className="price-details">
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
                <br />
                <Text type="success">
                  <strong style={{ colour: "green", fontSize: "2.8rem" }}>
                    Ksh.{" "}
                    {Number(
                      ((100 - details.discount) / 100) * details.price
                    ).toLocaleString()}
                  </strong>
                  <p>
                    Save Ksh.{" "}
                    {Number(
                      details.price * (details.discount / 100)
                    ).toLocaleString()}
                  </p>
                </Text>
              </div>
            ) : (
              <Text type="success">
                <strong style={{ colour: "green", fontSize: "2.8rem" }}>
                  Ksh. {Number(details.price).toLocaleString()}
                </strong>
              </Text>
            )}
          </div>
          {/* Description */}
          <Text>{details.description}</Text>
          <br />
          <br />
          {/* Offer Section */}
          {details.hasOffer &&
            currentDate <
              format(new Date(details.offerEndDate), "yyyy-MM-dd") && (
              <Text type="warning">
                <strong>Special Offer:</strong> {details.offerDescription}
              </Text>
            )}
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
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
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
