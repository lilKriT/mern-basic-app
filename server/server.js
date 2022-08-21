const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const UserModel = require("./models/Users");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  // const { name, age, username } = req.body;
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json("lol");
});

app.listen(3001, () => {
  console.log("Server runs!");
});
