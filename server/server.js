const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const UserModel = require("./models/Users");

const app = express();

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

app.listen(3001, () => {
  console.log("Server runs!");
});
