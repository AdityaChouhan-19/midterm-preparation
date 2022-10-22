const express = require("express");
const router = express.Router();

const test = require("../models/test");

module.exports.displayTestList = (req, res, next) => {
  test.find((err, testList) => {
    if (err) {
      return console.log(err);
    } else {
      res.render("models/test", {
        title: "Test List",
        TestList: testList,
      });
    }
  });
};
