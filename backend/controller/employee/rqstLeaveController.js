const RequestLeave = require("../../models/employee/rqstLeaveModel");
const Employee = require("../../models/admin/empManageModel");


exports.add = async (req, res, next) => {
  if (!req.user || req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied. Only employees can request leave." });
  }

  try {
    const data = {
      ...req.body,
      employeeUserName: req.user.userName,
    };

    let requestLeave = new RequestLeave(data);
    await requestLeave.save();

    res.status(200).json({
      message: "Request Leave Added Successfully",
      requestLeave: requestLeave,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
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

      res.status(200).json({
        message: "Get All Request Leaves for your employees",
        requests,
        admin: req.user.userName,
      });
    } else if (req.user.role === "employee") {
      const requests = await RequestLeave.find({ employeeUserName: req.user.userName });

      res.status(200).json({
        message: "Get All Request Leaves",
        requests,
        employee: req.user.userName,
      });
    } else {
      return res.status(403).json({ message: "Access denied." });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      const employees = await Employee.find({ adminUserName: req.user.userName });
      const employeeUserNames = employees.map(employee => employee.userName);

      const data = await RequestLeave.findOne({
        _id: req.params.id,
        employeeUserName: { $in: employeeUserNames },
      });

      if (!data) {
        return res.status(404).json({ message: "Leave request not found for your employees." });
      }

      res.status(200).json({
        message: "Leave request retrieved successfully",
        request: data,
      });
    } else if (req.user.role === "employee") {
      const data = await RequestLeave.findOne({
        _id: req.params.id,
        employeeUserName: req.user.userName,
      });

      if (!data) {
        return res.status(404).json({ message: "Leave request not found." });
      }

      res.status(200).json({
        message: "Leave request retrieved successfully",
        request: data,
      });
    } else {
      return res.status(403).json({ message: "Access denied." });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
    next(error);
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
      message: "Leave request updated successfully",
      requestLeave: data,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
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
      message: "Leave request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
    next(error);
  }
};


exports.updateStatus = async (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Only admins can approve/reject leave requests." });
  }

  try {
    const { status } = req.body;

    if (status !== "approved" && status !== "rejected") {
      return res.status(400).json({ message: "Invalid status. Must be 'approved' or 'rejected'." });
    }

    const requestLeave = await RequestLeave.findOneAndUpdate(
      { _id: req.params.id, employeeUserName: { $in: await getAdminEmployeeUserNames(req.user.userName) } },
      { $set: { status } },
      { new: true }
    );

    if (!requestLeave) {
      return res.status(404).json({ message: "Leave request not found for your employees." });
    }

    res.status(200).json({
      message: `Leave request has been ${status}.`,
      requestLeave,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
    next(error);
  }
};

const getAdminEmployeeUserNames = async (adminUserName) => {
  const employees = await Employee.find({ adminUserName });
  return employees.map(employee => employee.userName);
};
