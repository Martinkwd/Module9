"use strict";
let commentModel = require("../models/comment");

const getComments = (res) => {
  commentModel
    .find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComments = (data, res) => {
  console.log(data);
  new commentModel(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComments = (req, res) => {
  commentModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteComments = (req, res) => {
  commentModel
    .findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
};
