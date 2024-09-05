const RequestLeave = require("../../models/employee/rqstLeaveModel");

exports.add = async (req, res, next) => {
    try {
      const data = req.body;
      let requestLeave = new RequestLeave(data);
      await requestLeave.save();
      res.status(200).json({
        message: "Request Leave Added Successfully",
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
        error.message = error.message || "Something went wrong!";
        console.log("Validation Error:", error.errors); 
      }
      next(error);
    }
  };
  

exports.getAll = async (req, res, next) => {
  try {
    const data = await RequestLeave.find();
    res.status(200).json({
      message: "Get All Request Leaves",
      employee: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await RequestLeave.findById({ _id: req.params.id });
    res.status(200).json({
      message: "Get the leave",
      employee: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const data = req.body;
    await RequestLeave.updateOne({ _id: req.params.id }, { $set: data });
    res.status(200).json({
      message: "Leave edit Successfully",
      requestLeave: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await RequestLeave.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "Leave deleted successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};
