const Posts = require("../model/Posts");

module.exports.CreatePosts = async (req, res) => {
  const post = new Posts(req.body);

  Posts.find({ title: req.body.title }).exec((err, succ) => {
    if (err) {
      res.status(201).send({ status: false, message: "some thing went wrong" });
    } else {
      if (succ.length === 1) {
        res.status(200).send({ status: false,message:"post is already created"});
      } else {
        post.save((err, succ) => {
          if (err) {
            return res.status(401).send({
              status: false,
              message: "Error occurred due wrong validation ",
            });
          } else {
            return res.status(200).send({
              status: true,
              message: "successfully created Post",
              ...succ._doc,
            });
          }
        });
      }
    }
  });
};


module.exports.GetPosts = async (req, res) => {

  Posts.find().exec((err, succ) => {
    if (err) {
      res.status(401).send({ status: false, message: "some thing went wrong" });
    } else {
      res.status(200).send({status:true,succ})
    }
  });
};

module.exports.GetPostsById = async (req, res) => {
  Posts.find({userId:req.params.userId}).exec((err, succ) => {
    if (err) {
      res.status(401).send({ status: false, message: "some thing went wrong" });
    } else {
      console.log("yee");
      res.status(200).send({ status: true, succ });
    }
  });
};