import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: [String] },
    name: { type: String },
    description: { type: String },
    hasDiscount: { type: Boolean },
    discount: { type: Number },
    hasOffer: { type: Boolean },
    offerDescription: { type: String },
    price: { type: String },
    colour: { type: String },
    category: { type: String },
    // stockQuantity: { type: Number, default: 0 },
    tags: { type: [String] },
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
      enum: ["Available", "Out of Stock", "Discontinued", "Upcoming"],
      default: "Available",
    },
    offerStartDate: { type: Date },
    offerEndDate: { type: Date },
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
  },
  { collection: "promotion_products", timestamps: true }
);

const ProductsModel = mongoose.model("promotion_products", productSchema);
export default ProductsModel;
