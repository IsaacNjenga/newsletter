import React, { useState } from "react";
import Loader from "./loader.js";
import axios from "axios";
import Swal from "sweetalert2";
import "../assets/css/productForm.css";
import { categoryData, statusData } from "../assets/data/data.js";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    hasDiscount: false,
    discount: 0,
    hasOffer: false,
    offerDescription: "",
    price: "",
    colour: "",
    category: "",
    stockQuantity: 0,
    rating: 0,
    tags: [],
    isFeatured: false,
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
      unit: "cm",
    },
    weight: 0,
    availableColours: [],
    status: "Available",
    offerStartDate: "",
    offerEndDate: "",
    vendor: {
      name: "",
      contact: "",
    },
    shipping: {
      freeShipping: false,
      shippingCost: 0,
      estimatedDelivery: "",
    },
    customFields: {},
  });

  const handleChange = (e) => {
    const { name, value, type, checked, dataset } = e.target;

    if (dataset.parent === "dimensions") {
      setFormData((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [name]: value,
        },
      }));
    } else if (dataset.parent === "vendor") {
      setFormData((prev) => ({
        ...prev,
        vendor: {
          ...prev.vendor,
          [name]: value,
        },
      }));
    } else if (dataset.parent === "shipping") {
      setFormData((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          [name]: type === "checkbox" ? checked : value,
        },
      }));
    } else if (name === "tags" || name === "availableColours") {
      setFormData({
        ...formData,
        [name]: value.split(","),
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const response = await axios.post("add-product", formData);
      if (response.data.success) {
        Swal.fire({ icon: "success", title: "Successfully added!" });
        setFormData({
          image: "",
          name: "",
          description: "",
          hasDiscount: false,
          discount: 0,
          hasOffer: false,
          offerDescription: "",
          price: "",
          colour: "",
          category: "",
          stockQuantity: 0,
          rating: 0,
          tags: [],
          isFeatured: false,
          dimensions: {
            length: 0,
            width: 0,
            height: 0,
            unit: "cm",
          },
          weight: 0,
          availableColours: [],
          status: "Available",
          offerStartDate: "",
          offerEndDate: "",
          vendor: {
            name: "",
            contact: "",
          },
          shipping: {
            freeShipping: false,
            shippingCost: 0,
            estimatedDelivery: "",
          },
          customFields: {},
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Refresh the page and try again.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="hasDiscount"
              checked={formData.hasDiscount}
              onChange={handleChange}
            />
            Has Discount
          </label>
        </div>

        {formData.hasDiscount && (
          <div>
            <label>Discount Percentage:</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>
        )}

        <div>
          <label>
            <input
              type="checkbox"
              name="hasOffer"
              checked={formData.hasOffer}
              onChange={handleChange}
            />
            Has Offer
          </label>
        </div>

        {formData.hasOffer && (
          <>
            <div>
              <label>Offer Description:</label>
              <textarea
                name="offerDescription"
                value={formData.offerDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label>Start Date:</label>
              <input
                type="date"
                name="offerStartDate"
                value={formData.offerStartDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>End Date:</label>{" "}
              <input
                type="date"
                name="offerEndDate"
                value={formData.offerEndDate}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Colour:</label>
          <input
            type="text"
            name="colour"
            value={formData.colour}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryData.map((c, index) => (
              <option key={index} value={c.name}>
                {c.category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Tags</label>
        </div>

        <div>
          <label>Dimensions</label>
          <div>
            <label>Unit:</label>
            <select
              name="unit"
              value={formData.dimensions.unit}
              onChange={handleChange}
              data-parent="dimensions"
              required
            >
              <option value="cm">cm</option>
              <option value="inches">inches</option>
            </select>
          </div>
          <div>
            <div>
              <label>Length:</label>
              <input
                type="number"
                name="length"
                value={formData.dimensions.length}
                onChange={handleChange}
                data-parent="dimensions"
                min="0"
                required
              />
            </div>
            <div>
              <label>Width:</label>
              <input
                type="number"
                name="width"
                value={formData.dimensions.width}
                onChange={handleChange}
                data-parent="dimensions"
                min="0"
                required
              />
            </div>
            <div>
              <label>Height:</label>
              <input
                type="number"
                name="height"
                value={formData.dimensions.height}
                onChange={handleChange}
                data-parent="dimensions"
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label>Weight (KG)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="" disabled>
              Select a status
            </option>
            {statusData.map((s, index) => (
              <option key={index} value={s.name}>
                {s.status}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddProduct;
