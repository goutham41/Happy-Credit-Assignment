const router = require("express").Router();
const { CreateMessage, GetMessageById } = require("../controllers/Comments");
router.post("/create", CreateMessage);
router.get("/get/:userId", GetMessageById);
module.exports = router;
