const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://basicBoss:NhVjgEPq0kWFSc4a@basic-cluster.c4uh1za.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Server runs!");
});
