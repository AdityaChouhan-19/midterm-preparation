const express = require("express");
const router = express.Router();

const testController = require("../controllers/testModel");

router.get('/', testController.displayTestList);

module.exports = router;