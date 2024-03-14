const express = require("express");
const processedData = require("../../Controllers/v1/processedData.controller");
const router = express.Router();
router.get("/",  processedData.getAll);

module.exports = router;
