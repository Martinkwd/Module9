"use strict";
const User = require("./user");
const Post = require("./post");
const Like = require("./like");
const Comment = require("./comment");

async function init() {
  await User.sync();
  await Post.sync();
  await Like.sync();
  await Comment.sync();
}

init();

module.exports = {
  User,
  Post,
  Like,
  Comment,
};
