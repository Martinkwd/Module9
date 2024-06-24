const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  userController.getUsers(res);
});
router.post("/create", (req, res) => {
  userController.createUser(req.body, res);
});
router.put("/:id", (req, res) => {
  userController.updateUser(req, res);
});
router.delete("/:id", (req, res) => {
  userController.deleteUser(req, res);
});
module.exports = router;
