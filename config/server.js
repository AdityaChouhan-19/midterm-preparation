const express = require("express");
const app = express();

const path = require("path");

const indexRouter = require("../app/routes/index");
//const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app", "views"));

app.use("/", indexRouter);


module.exports = app;