"use strict";
let likeModel = require("../models/like");

const createLikes = (data, res) => {
  console.log(data);
  new likeModel(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLikes = (req, res) => {
  likeModel
    .findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createLikes,
  deleteLikes,
};
