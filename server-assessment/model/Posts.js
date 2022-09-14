const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  userId: Number,
  title: String,
  body: String,
  id: Number,
});
const Posts = model("Posts", PostSchema);
module.exports = Posts;
