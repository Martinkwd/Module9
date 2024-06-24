"use strict";
const Models = require("../models");
// const userModels = require("../models/post");

// finds all users in DB, then sends array as response
const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createPosts = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const updatePosts = (req, res) => {
  Models.Post.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// deletes user matching ID from params
const deletePosts = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
};

// // finds all users in DB, then sends array as response
// const getPosts = (res) => {
//   postModels
//     .findAll({})
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };
// // uses JSON from request body to create new user in DB
// const createPosts = (data, res) => {
//   postModels
//     .create(data)
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };
// const updatePosts = (req, res) => {
//   postModels
//     .update(req.body, {
//       where: { id: req.params.id },
//       returning: true,
//     })
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };
// // deletes user matching ID from params
// const deletePosts = (req, res) => {
//   postModels
//     .destroy({ where: { id: req.params.id } })
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };
// module.exports = {
//   getPosts,
//   createPosts,
//   updatePosts,
//   deletePosts,
// };
