const express=require("express")
const{loginValidator,registerValidator}=require("./validators");
const { userRegistrationController, userLoginController, userLogoutController } = require("./controllers");

const authRouter=express.Router();

authRouter.post("/signup",registerValidator,userRegistrationController);
authRouter.post("/login",loginValidator,userLoginController);
authRouter.get("/logout",userLogoutController);

module.exports={authRouter};
