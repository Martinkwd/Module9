const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", (req, res) => {
  productController.getProducts(req, res);
});
router.get("/:id", (req, res) => {
  productController.getOneProducts(req, res);
});
router.post("/create", (req, res) => {
  productController.createProducts(req.body, res);
});
router.put("/update/:id", (req, res) => {
  productController.updateProducts(req, res);
});

router.delete("/delete/:id", (req, res) => {
  productController.deleteProducts(req, res);
});
router.get("/start", (req, res) => {
  productController.startUp(req, res);
});

module.exports = router;
