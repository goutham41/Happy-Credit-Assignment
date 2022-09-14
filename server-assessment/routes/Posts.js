const router = require("express").Router();
const { CreatePosts, GetPosts, GetPostsById} = require("../controllers/Posts");
router.post("/create", CreatePosts);
router.get("/get", GetPosts);
router.get("/get/:userId", GetPostsById);
module.exports = router;
