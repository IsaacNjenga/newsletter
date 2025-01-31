import ProductsModel from "../models/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    const newProduct = new ProductsModel({ ...req.body });
    await newProduct.save();
    res
      .status(201)
      .json({ success: true, msg: "Product created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error!" });
  }
};
const getProducts = async (req, res) => {
  try {
    const allProducts = await ProductsModel.find({});
    res.status(201).json({ success: true, allProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error!" });
  }
};

const getProduct = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(404).json({ success: false, msg: "Invalid category" });
  }

  try {
    const product = await ProductsModel.find({ category: category });

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "There was an error!" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  if (!id) {
    res.status(400).json({ success: false, msg: "Invalid ID" });
  }
  try {
    const product = await ProductsModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json({ success: true, ...product._doc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error!" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  
  if (!id) {
    res.status(400).json({ success: false, msg: "Invalid ID" });
  }
  try {
    const product = await ProductsModel.findById(id);
    if (!product) {
      return res.status(400).json({ error: "No product found!" });
    }
    await ProductsModel.findByIdAndDelete({ _id: id });
    const products = await ProductsModel.find({});
    res.status(201).json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error!" });
  }
};

export { addProduct, getProducts, getProduct, updateProduct, deleteProduct };
