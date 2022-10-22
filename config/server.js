require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const indexRouter = require("../app/routes/index");

const mongoose = require("mongoose");

// Establishing connection with mongodb
mongoose.connect(process.env.MONGODB_URI);

const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "Connection error"));
mongodb.once("open", () => {
  console.log("Connected to database...");
});

// Setting view engine to ejs and setting the path of views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app", "views"));

app.use("/", indexRouter);

module.exports = app;
