// const express = require("express");
// const router = express.Router();
// const commentController = require("../controllers/commentController");

// router.get("/", (req, res) => {
//   commentController.getComments(res);
// });
// router.post("/create", (req, res) => {
//   commentController.createComments(req.body, res);
// });
// router.put("/:id", (req, res) => {
//   commentController.updateComments(req, res);
// });
// router.delete("/:id", (req, res) => {
//   commentController.deleteComments(req, res);
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});
router.post("/create", (req, res) => {
  Controllers.commentController.createComments(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComments(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComments(req, res);
});
module.exports = router;
