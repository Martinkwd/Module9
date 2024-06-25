"use strict";

const Product = require("./poduct");

async function init() {
  await Product.sync();
}

init();

module.exports = {
  Product,
};
