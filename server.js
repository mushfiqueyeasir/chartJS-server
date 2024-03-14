const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Database Backend App is listening on port ${port}`.cyan.bold);
});
