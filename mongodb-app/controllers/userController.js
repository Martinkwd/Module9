"use strict";
let userModel = require("../models/user");

const getUsers = (res) => {
  userModel
    .find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUsers = (data, res) => {
  console.log(data);
  new userModel(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getUsers,
  createUsers,
};
