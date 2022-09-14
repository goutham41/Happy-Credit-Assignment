const Messages = require("../model/Comments");

module.exports.CreateMessage = async (req, res) => {
  const message = new Messages(req.body);
   message.save((err, succ) => {
     if (err) {
       return res.status(401).send({
         status: false,
         message: "Error occurred due wrong validation",
       });
     } else {
       return res.status(200).send({
         status: true,
         message: "successfully created Post",
         ...succ._doc,
       });
     }
   });
};

module.exports.GetMessageById = async (req, res) => {
  Messages.find({ userId: req.params.userId }).exec((err, succ) => {
    if (err) {
      res.status(401).send({ status: false, message: "some thing went wrong" });
    } else {
      res.status(200).send({ status: true,succ });
    }
  });
};