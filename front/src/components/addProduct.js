import React, { useState } from "react";
import Loader from "./loader.js";
import axios from "axios";
import Swal from "sweetalert2";
import "../assets/css/productForm.css";
import {
  accessoriesTags,
  categoryData,
  electronicsTags,
  homeFurnitureTags,
  officeFurnitureTags,
  secondHandItemsTags,
  statusData,
} from "../assets/data/data.js";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [imagePublicIds, setImagePublicIds] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [formData, setFormData] = useState({
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

    if (name === "category") {
      const selectedCategory = value.replace(/\s+/g, "").toLowerCase();

      setActiveTags(categoryTagsMap[selectedCategory] || []);
    }

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

  const handleImageUpload = (e) => {
    setLoading(true);
    const files = Array.from(e.target.files); // Get all selected files
    const maxSize = 10 * 1024 * 1024;

    // Check each file size
    for (let file of files) {
      if (file.size > maxSize) {
        return Swal.fire({
          icon: "error",
          title: "File exceeds limit!",
          text: "Please select a file less than 10MB",
          confirmButtonText: "OK",
        });
      }
    }

    const cloud_name = "dinsdfwod";
    const preset_key = "EasyManager";
    let newImageUrls = [];
    let newImagePublicIds = [];

    const uploadPromises = files.map((file) => {
      const formImageData = new FormData();
      formImageData.append("file", file);
      formImageData.append("upload_preset", preset_key);

      return axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          formImageData,
          { withCredentials: false }
        )
        .then((res) => {
          // For each uploaded image, update the arrays
          newImageUrls.push(res.data.secure_url);
          newImagePublicIds.push(res.data.public_id);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Failed to upload image",
            text: "There was an unexpected error. Please try again",
            confirmButtonText: "OK",
          });
        });
    });

    // After all uploads are done, update the state
    Promise.all(uploadPromises)
      .then(() => {
        Swal.fire({ icon: "success", title: "Images added successfully" });
        setLoading(false);

        setImageUrls((prevImages) => [...prevImages, ...newImageUrls]);
        setImagePublicIds((prevIds) => [...prevIds, ...newImagePublicIds]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed to upload image",
          text: "There was an unexpected error. Please try again",
          confirmButtonText: "OK",
        });
      });
  };

  const deletePicture = (e, publicId) => {
    e.preventDefault();
    if (!publicId) {
      return Swal.fire({
        icon: "error",
        title: "No image to delete!",
        text: "You have not selected a valid image to delete",
        confirmButtonText: "OK",
      });
    }
    setLoading(true);

    axios
      .delete("delete-image", { data: { publicId } })
      .then(() => {
        setImageUrls((prevImages) =>
          prevImages.filter((_, index) => imagePublicIds[index] !== publicId)
        );
        setImagePublicIds((prevIds) => prevIds.filter((id) => id !== publicId));
        setLoading(false);
        Swal.fire({ icon: "success", title: "Image removed!" });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed to delete!",
          text: "Refresh the page and try again",
          confirmButtonText: "OK",
        });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { ...formData, image: imageUrls };
    console.log(formData);
    setLoading(true);
    try {
      const response = await axios.post("add-product", productData);
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

  const categoryTagsMap = {
    officefurniture: officeFurnitureTags,
    homefurniture: homeFurnitureTags,
    electronics: electronicsTags,
    "second-handitems": secondHandItemsTags,
    accessories: accessoriesTags,
  };

  return (
    <>
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "550px", margin: "0 auto" }}
        className="product-form"
      >
        <div>
          <input
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
            multiple
          />
          {imageUrls.length > 0 ? (
            <div className="image-preview-container">
              {imageUrls.map((url, index) => (
                <div key={imagePublicIds[index]}>
                  <img
                    src={url}
                    alt="uploaded"
                    style={{
                      width: "150px",
                      height: "auto",
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                  <br />
                  <div
                    style={{
                      margin: "auto",
                      width: "100px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={(e) => deletePicture(e, imagePublicIds[index])}
                      className="remove-picture-btn"
                    >
                      Remove picture
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-image-text">No image(s) uploaded.</p>
          )}
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
          <label>Product Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="product-category-dropdown"
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

        <div className="tags-div">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1px" }}>
            {activeTags.length > 0 ? (
              <label>Select relevant tags for this item</label>
            ) : null}
            {activeTags.length > 0
              ? activeTags.map((tag, index) => (
                  <>
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        id={`tag-${index}`}
                        value={tag}
                        checked={formData.tags.includes(tag)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setFormData((prev) => ({
                            ...prev,
                            tags: checked
                              ? [...prev.tags, value] // Add tag if checked
                              : prev.tags.filter((t) => t !== value), // Remove tag if unchecked
                          }));
                        }}
                      />
                      <label htmlFor={`tag-${index}`} className="tag">
                        {tag}
                      </label>
                    </div>
                  </>
                ))
              : null}
          </div>
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
          <label>Dimensions</label>
          <div className="product-dimensions-container">
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddProduct;

// .tag {
//     display: flex;
//     flex-direction: row;
//     padding: 7px 25px;
//     background: var(--tag-lg);
//     color: var(--text-color);
//     font-weight: 100;
//     margin: 5px 10px;
//     font-size: 0.8rem;
//     border-radius: 22px;
//     color: #00d8ff;
//     background: #000000;
//   }