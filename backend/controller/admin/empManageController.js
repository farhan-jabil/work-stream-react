const Employee = require("../../models/admin/empManageModel");

exports.add = async (req, res, next) => {
  try {
    const data = req.body;
    let employee = new Employee(data);
    await employee.save();
    res.status(200).json({
      message: "Employee Added Successfully",
    });
  } catch (error) {
    if (!error.statusCode) { 
      error.statusCode = 500;  
      error.message = "Something went wrong!";
    } 
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const data = await Employee.find();
    res.status(200).json({
      message: "Get all employee",
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
    const data = await Employee.findById({ _id: req.params.id });
    res.status(200).json({
      message: "Get the employee",
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
    await Employee.updateOne({ _id: req.params.id }, { $set: data });
    res.status(200).json({
      message: "Employee edit Successfully",
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

exports.delete = async (req, res, next) => {
  try {
    await Employee.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};
