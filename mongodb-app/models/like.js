const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({
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
});
module.exports = mongoose.model("like", likeSchema);
