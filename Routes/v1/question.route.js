const express = require("express");
const questionController = require("../../Controllers/v1/question.controller");
const router = express.Router();
router.get("/", questionController.getAll);

module.exports = router;
