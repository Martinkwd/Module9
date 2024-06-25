"use strict";
const { error } = require("console");
const Model = require("../model");
const dataApi = require("../dataApi");
const { response } = require("express");

const startUp = (req, res) => {
  dataApi();
  res.send("Data extracted and created database succesfully");
};

const getProducts = (req, res) => {
  Model.Product.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOneProducts = (req, res) => {
  Model.Product.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createProducts = (data, res) => {
  Model.Product.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateProducts = (req, res) => {
  Model.Product.update(req.body, {
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

const deleteProducts = (req, res) => {
  Model.Product.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  startUp,
  getProducts,
  getOneProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
