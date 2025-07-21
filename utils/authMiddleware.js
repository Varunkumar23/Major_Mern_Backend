const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const { authorization } = req.cookies;

  if (!authorization) {
    return res.status(401).json({
      isSuccess: false,
      message: "Access denied: Token not found",
    });
  }

  try {
    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      isSuccess: false,
      message: "Access denied: Invalid or expired token",
    });
  }
};

module.exports = {authMiddleware};
