const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
  message:String,
  userId:Number
});
const Messages = model("Messages", MessageSchema);
module.exports = Messages;
