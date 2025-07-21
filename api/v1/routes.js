const express = require("express");
const { userRouter } = require("../v1/users/routes");
const { productRouter } = require("../v1/products/routes");
const { authRouter } = require("./auth/routes");

const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/auth", authRouter);

module.exports = { apiRouter };
