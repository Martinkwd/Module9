// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");

// router.get("/", (req, res) => {
//   userController.getUsers(res);
// });
// router.post("/create", (req, res) => {
//   userController.createUser(req.body, res);
// });
// router.put("/:id", (req, res) => {
//   userController.updateUser(req, res);
// });
// router.delete("/:id", (req, res) => {
//   userController.deleteUser(req, res);
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});
router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.userController.updateUsers(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUsers(req, res);
});
module.exports = router;
