//require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

// Morgan setup
const morgan = require("morgan");
app.use(morgan("dev"));

const indexRouter = require("../app/routes/index");
const testRouter = require("../app/routes/testModel");

const mongoose = require("mongoose");

// Establishing connection with mongodb
const db = require("./mongodb");
mongoose.connect(db.URI);

const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "Connection error"));
mongodb.once("open", () => {
  console.log("Connected to database...");
});

// Setting view engine to ejs and setting the path of views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app", "views"));

app.use("/", indexRouter);
app.use("/test", testRouter);

module.exports = app;
