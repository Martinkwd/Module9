const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    trim: true,
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    trim: true,
    required: true,
  },
  commentText: { type: String, trim: true, required: true },
});
module.exports = mongoose.model("comment", commentSchema);
