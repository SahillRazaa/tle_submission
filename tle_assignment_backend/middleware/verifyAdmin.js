const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "An Authorization header is required",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      throw new Error("Invalid Role!");
    }
    next();
  } catch (error) {
    res.status(403).json("You are not authorized!");
  }
};

module.exports = verifyAdmin;
