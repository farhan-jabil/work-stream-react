const User = require("../models/admin/signUpModel");

exports.getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Status: "Internal server error" });
  }
};
