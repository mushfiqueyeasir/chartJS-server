const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static(__dirname + "/public/"));

//middleware
app.use(cors());
app.use(express.json());

//routes
const answerRoute = require("./Routes/v1/answer.route");
const questionRoute = require("./Routes/v1/question.route");
const processedDataRoute = require("./Routes/v1/processedData.route");

app.use("/api/v1/answer", answerRoute);
app.use("/api/v1/question", questionRoute);
app.use("/api/v1/processed", processedDataRoute);

module.exports = app;
