require("dotenv").config();
const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express");
const cors = require("cors");
const PostsRoutes = require("./routes/Posts");
const MessageRoutes = require("./routes/Comments");
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://Happy-Credit-Assignment414.netlify.app/",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }),
);
app.use("/server", (req,res)=>{
    res.send(`server is working ${process.env.PORT}`);
});
app.use("/posts",PostsRoutes)
app.use("/message",MessageRoutes);
app.listen(process.env.PORT, async () => {
  await connection;
  console.log("connected to db");
  console.log(`Server started on ${process.env.PORT}`);
});
