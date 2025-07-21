const express = require("express");

const userRouter = express.Router();
const { getUserDetailsController } = require("./controller");

userRouter.get("/", getUserDetailsController);

module.exports = { userRouter };
