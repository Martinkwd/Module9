let express = require("express");
let router = express.Router();
let commentController = require("../controllers/commentController");

router.get("/", (req, res) => {
  commentController.getComments(res);
});

router.post("/create", (req, res) => {
  commentController.createComments(req.body, res);
});

router.put("/update", (req, res) => {
  commentController.updateComments(req.body, res);
});

router.delete("/delete", (req, res) => {
  commentController.deleteComments(req.body, res);
});

module.exports = router;
