// const express = require("express");
// const router = express.Router();
// const postController = require("../controllers/postController");

// router.get("/", (req, res) => {
//   postController.getPosts(res);
// });
// router.post("/create", (req, res) => {
//   postController.createPosts(req.body, res);
// });
// router.put("/:id", (req, res) => {
//   postController.updatePosts(req, res);
// });
// router.delete("/:id", (req, res) => {
//   postController.deletePosts(req, res);
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
router.post("/create", (req, res) => {
  Controllers.postController.createPosts(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.postController.updatePosts(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePosts(req, res);
});
module.exports = router;
