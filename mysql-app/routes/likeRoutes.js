// const express = require("express");
// const router = express.Router();
// const likeController = require("../controllers/likeController");

// router.post("/create", (req, res) => {
//   likeController.createLikes(req.body, res);
// });

// router.delete("/:id", (req, res) => {
//   likeController.deleteLikes(req, res);
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});
router.post("/create", (req, res) => {
  Controllers.likeController.createLikes(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLikes(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLikes(req, res);
});
module.exports = router;
