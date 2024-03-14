const fs = require("fs");
const path = require("path");

exports.getAllData = async () => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "../../content/v1/answers.json");
    const processedData = {};
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        reject("Internal Server Error");
        return;
      }
      const jsonData = JSON.parse(data);

      jsonData.forEach((obj) => {
        const submissionId = obj.submissionId;
        const answer = obj.answer;

        // If answer is not empty, add it to the merged data
        if (answer) {
          // If submissionId already exists, append the answer to the list of answers
          if (processedData.hasOwnProperty(submissionId)) {
            if (obj.questionIndex === 0) {
              processedData[submissionId].age = answer;
            } else if (obj.questionIndex === 1) {
              processedData[submissionId].gender = answer;
            } else if (obj.questionIndex === 2) {
              processedData[submissionId].location = answer;
            } else if (obj.questionIndex === 3) {
              processedData[submissionId].comment = answer;
            }
          } else {
            if (obj.questionIndex === 0) {
              processedData[submissionId] = { age: answer };
            } else if (obj.questionIndex === 1) {
              processedData[submissionId] = { gender: answer };
            } else if (obj.questionIndex === 2) {
              processedData[submissionId] = { location: answer };
            } else if (obj.questionIndex === 3) {
              processedData[submissionId] = { comment: answer };
            }
          }
        }
      });
      resolve(Object.values(processedData));
    });
  });
};
