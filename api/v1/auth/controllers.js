const bcrypt = require("bcrypt");
const { userModel } = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");
const { handleGenericApiError } = require("../../../utils/controllerHelpers");
const { attachJWTToken, removeJWTToken } = require("../../../utils/jwtHelpers");

const userRegistrationController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        isSuccess: false,
        message: "User already Exists!",
        data: {},
      });
    }

    const newUser = await userModel.create({ email, password, role });
    const { password: _, ...safeData } = newUser._doc;

    res.status(201).json({
      isSuccess: true,
      message: "User Created Successfully!",
      data: safeData,
    });
  } catch (err) {
    handleGenericApiError("userRegistrationController", req, res, err);
  }
};

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        isSuccess: false,
        message: "User does not exist, Please Register First!",
        data: {},
      });
    }
    const hashedPassword = user.password;
    const isCorrect = await bcrypt.compare(password.toString(), hashedPassword);
    if (!isCorrect) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid Password, Please try again...!",
        data: {},
      });
    }
    attachJWTToken(res, { email: user.email, _id: user._id, user: user.role });
    return res.status(200).json({
      isSuccess: true,
      message: "Login Successfull!",
      data: { user: { email: user.email, _id: user._id, role: user.role } },
    });
  } catch (err) {
    handleGenericApiError(userLoginController, req, res, err);
  }
};

const userLogoutController = async (req, res) => {
  removeJWTToken(res, {});
  res.status(200).json({ isSuccess: true, message: "Logout success!" });
};

const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      isSuccess: false,
      message: "Access Denied",
      data: {},
    });
  }
  next();
};

module.exports = {
  adminMiddleware,
  userLogoutController,
  userLoginController,
  userRegistrationController,
};
