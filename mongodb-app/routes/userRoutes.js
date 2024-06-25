let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/", (req, res) => {
  userController.getUsers(res);
});

router.post("/create", (req, res) => {
  userController.createUsers(req.body, res);
});
module.exports = router;
