"use strict";
let postModel = require("../models/post");

const createPosts = (data, res) => {
  console.log(data);
  new postModel(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getPosts = (res) => {
  postModel
    .find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePosts = (req, res) => {
  postModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePosts = (req, res) => {
  postModel
    .findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
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
