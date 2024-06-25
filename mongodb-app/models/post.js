const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    trim: true,
    required: true,
    unique: true,
  },
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true, unique: true },
});
module.exports = mongoose.model("post", postSchema);
