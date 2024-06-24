const Product = require("../models/Product");

module.exports = {
  createProduct,
  getProducts,
  updatedProduct,
  deleteProduct,
  displayProducts,
};

// create a new product/service entry
async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
}

// get all products offered
async function getProducts(req, res) {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
}

// update a product/service by ID
async function updatedProduct(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete a product by id
async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function displayProducts(req, res) {
  try {
    const products = await Product.find({});

    res.status(200).json(displayProducts);
  } catch (err) {
    res.status(400).json(err);
  }
}
