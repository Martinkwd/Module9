"use strict";
const Models = require("../models");
// const userModels = require("../models/like");

// uses JSON from request body to create new user in DB
const createLikes = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes user matching ID from params
const deleteLikes = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  createLikes,
  deleteLikes,
};

// // uses JSON from request body to create new user in DB
// const createLikes = (data, res) => {
//   likeModels
//     .create(data)
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// // deletes user matching ID from params
// const deleteLikes = (req, res) => {
//   likeModels
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
//   createLikes,
//   deleteLikes,
// };
