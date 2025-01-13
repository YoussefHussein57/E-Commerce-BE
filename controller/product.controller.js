const productModel = require("../models/product.model");

exports.createProduct = async (req, res) => {
  try {

    req.body.imageUrl = req.file.filename
    const product = await productModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(201).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ Message: "product Not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    return res
      .status(500)
      .json({ Message: "Error fetching product", error: err.message });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ Message: "product Not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error updating product", error: error.message });
  }
};

exports.bulkDelete = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids)) {
      return res.status(400).json({ message: "Ids are not an array" });
    }

    const deleteResult = await productModel.deleteMany({ _id: { $in: ids } });
    res
      .status(200)
      .json({ message: "Products deleted successfully", data: deleteResult });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting products", error: error.message });
  }
};
