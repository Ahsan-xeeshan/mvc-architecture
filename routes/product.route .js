const express = require("express");

const {
  getProducts,
  saveProducts,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", getProducts);

router.post("/products", saveProducts);

module.exports = router;
