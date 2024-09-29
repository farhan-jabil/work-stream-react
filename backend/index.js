const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const employeeManagementRoute = require("./routes/admin/empManageRoute");
const requestLeaveRoute = require("./routes/employee/requestLeave");
const userRoute = require("./routes/userRoute");
const infoRoute = require("./routes/infoRoute");

app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/leaveManagement", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database: ", error);
  }
};
connectDB();

app.use(express.json());


app.use("/admin/employee-manage", authMiddleware, employeeManagementRoute);
app.use("/request-leave", authMiddleware, requestLeaveRoute);
app.use("/user", userRoute);
app.use("/user", authMiddleware, infoRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
