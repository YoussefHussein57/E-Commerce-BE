const express = require("express");

const router = express.Router();

const productController = require("../controller/product.controller");

const upload = require('../config/multerConfig')

router.post("/", upload.single('productImage') , productController.createProduct);

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProductById);

router.delete("/:id", productController.deleteProduct);
router.delete("/:ids", productController.bulkDelete);

module.exports = router;
