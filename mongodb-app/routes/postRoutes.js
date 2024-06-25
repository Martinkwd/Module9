let express = require("express");
let router = express.Router();
let postController = require("../controllers/postController");

router.post("/create", (req, res) => {
  postController.createPosts(req.body, res);
});

router.get("/", (req, res) => {
  postController.getPosts(res);
});

router.put("/update", (req, res) => {
  postController.updatePosts(res);
});

router.delete("/delete", (req, res) => {
  postController.deletePosts(res);
});

module.exports = router;
