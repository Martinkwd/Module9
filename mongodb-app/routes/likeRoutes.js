let express = require("express");
let router = express.Router();
let likeController = require("../controllers/likeController");

router.post("/create", (req, res) => {
  likeController.createLikes(req.body, res);
});

router.delete("/delete", (req, res) => {
  likeController.deleteLikes(res);
});

module.exports = router;
