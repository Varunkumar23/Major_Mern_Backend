const jwt = require("jsonwebtoken");

const attachJWTToken = (res, data) => {
  const token = jwt.sign(
    {
      id: data._id,
      email: data.email,
      role: data.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // Also add expiration to JWT itself
  );

  res.cookie("authorization", token, {
    maxAge: 1 * 60 * 60 * 1000, // 1 hour
    secure: process.env.NODE_ENV === "production", // only HTTPS in prod
    sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax",
    httpOnly: true,
  });
};


const removeJWTToken = (res) => {
  res.clearCookie("authorization", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax",
  });
};

module.exports = { attachJWTToken, removeJWTToken };
