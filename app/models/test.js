const mongoose = require("mongoose");

const testModel = mongoose.Schema(
  {
    name: String,
    id: Number,
    grade: String,
  },
  {
    collection: "test",
  }
);

module.exports = mongoose.model("test", testModel);
