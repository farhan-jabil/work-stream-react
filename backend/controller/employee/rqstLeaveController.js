const RequestLeave = require("../../models/employee/rqstLeaveModel");
const Employee = require("../../models/admin/empManageModel")

exports.add = async (req, res, next) => {
  if (!req.user || req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied. Only employees can request leave." });
  }

  try {
    const data = {
      ...req.body,
      employeeUserName: req.user.userName
    };
    
    let requestLeave = new RequestLeave(data);
    await requestLeave.save();
    
    res.status(200).json({
      message: "Request Leave Added Successfully",
      requestLeave: requestLeave,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = error.message || "Something went wrong!";
    }
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      const employees = await Employee.find({ adminUserName: req.user.userName });

      if (!employees.length) {
        return res.status(404).json({ message: "No employees found for this admin." });
      }

      const employeeUserNames = employees.map(employee => employee.userName);
      const requests = await RequestLeave.find({ employeeUserName: { $in: employeeUserNames } });

      return res.status(200).json({
        message: "Get All Request Leaves for your employees",
        requests,
        admin: req.user.userName
      });
    }

    if (req.user.role === "employee") {
      const requests = await RequestLeave.find({ employeeUserName: req.user.userName });

      return res.status(200).json({
        message: "Get All Request Leaves",
        requests,
        employee: req.user.userName
      });
    }

    return res.status(403).json({ message: "Access denied." });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.get = async (req, res, next) => {
  if (req.user.role === "admin") {
    try {
      const employees = await Employee.find({ adminUserName: req.user.userName });

      if (!employees.length) {
        return res.status(404).json({ message: "No employees found for this admin." });
      }

      const employeeUserNames = employees.map(employee => employee.userName);
      const data = await RequestLeave.findOne({ _id: req.params.id, employeeUserName: { $in: employeeUserNames } });

      if (!data) {
        return res.status(404).json({ message: "Leave request not found for your employees." });
      }

      res.status(200).json({
        message: "Get the leave request",
        request: data,
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
        error.message = "Something went wrong!";
      }
      next(error);
    }
  } else if (req.user && req.user.role === "employee") {
    try {
      const data = await RequestLeave.findOne({ _id: req.params.id, employeeUserName: req.user.userName });
      if (!data) {
        return res.status(404).json({ message: "Leave request not found." });
      }
      res.status(200).json({
        message: "Get the leave request",
        request: data,
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
        error.message = "Something went wrong!";
      }
      next(error);
    }
  } else {
    return res.status(403).json({ message: "Access denied." });
  }
};

exports.edit = async (req, res, next) => {
  if (!req.user || req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied. Only employees can edit leave requests." });
  }

  try {
    const data = req.body;
    await RequestLeave.updateOne({ _id: req.params.id, employeeUserName: req.user.userName }, { $set: data });
    res.status(200).json({
      message: "Leave edited Successfully",
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
  if (!req.user || req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied. Only employees can delete leave requests." });
  }

  try {
    await RequestLeave.findOneAndDelete({ _id: req.params.id, employeeUserName: req.user.userName });
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
