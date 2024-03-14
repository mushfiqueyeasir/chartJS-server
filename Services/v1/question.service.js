const fs = require("fs");
const path = require("path");

exports.getAllData = async () => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "../../content/v1/questions.json");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        reject("Internal Server Error");
        return;
      }
      const jsonData = JSON.parse(data);
      resolve(jsonData);
    });
  });
};
