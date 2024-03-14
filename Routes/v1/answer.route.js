const express = require("express");
const answerController = require("../../Controllers/v1/answer.controller");

const router = express.Router();

router.get("/",  answerController.getAll);

module.exports = router;
