const jwt = require("jsonwebtoken");
const jwtSecret = "FarhanHasanJabil";

const authMiddleware = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const data = jwt.verify(token, jwtSecret);
    req.user = data;  // Data now has role too
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
