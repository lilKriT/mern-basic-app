const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.listen(3001, () => {
  console.log("Server runs!");
});
