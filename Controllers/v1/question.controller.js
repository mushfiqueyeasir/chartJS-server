const { getAllData } = require("../../Services/v1/question.service");
exports.getAll = async (req, res, next) => {
  try {
    const result = await getAllData(req.query);
    res.status(200).json({
      status: "success",
      message: "All Question Data Acquired Successfully!",
      data: result,
      length: result.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "All Question Data Couldn't Acquired Unsuccessful!",
      error: error.message,
    });
  }
};
