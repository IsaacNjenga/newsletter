import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    hasDiscount: { type: Boolean },
    discount: { type: Number },
    hasOffer: { type: Boolean },
    offerDescription: { type: String },
    price: { type: String },
    colour: { type: String },
    category: { type: String },
    stockQuantity: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: [
      {
        reviewerName: { type: String },
        reviewText: { type: String },
        rating: { type: Number },
        date: { type: Date, default: Date.now },
      },
    ],
    tags: { type: [String] },
    isFeatured: { type: Boolean, default: false },
    dimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
      unit: { type: String, default: "cm" },
    },
    weight: { type: Number },
    availableColours: { type: [String] },
    status: {
      type: String,
      enum: ["Available", "Out of Stock", "Discontinued","Upcoming"],
      default: "Available",
    },
    offerStartDate: { type: Date },
    offerEndDate: { type: Date },
    vendor: {
      name: { type: String },
      contact: { type: String },
    },
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    mediaUrls: { type: [String] },
    shipping: {
      freeShipping: { type: Boolean, default: false },
      shippingCost: { type: Number },
      estimatedDelivery: { type: String },
    },
    customFields: { type: Map, of: String },
  },
  { collection: "promotion_products", timestamps: true }
);

const ProductsModel = mongoose.model("promotion_products", productSchema);
export default ProductsModel;
