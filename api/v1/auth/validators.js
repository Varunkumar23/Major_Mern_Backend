const { handleGenericAPIError } = require("../../../utils/controllerHelpers");

const loginValidator = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        isSuccess: false,
        message: "Email and Password is required",
        data: {},
      });
      return;
    }
    next();
  } catch (err) {
    handleGenericAPIError("loginValidator", req, res, err);
  }
};

const registerValidator = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        isSuccess: false,
        message: "Email and Password are required",
        data: {},
      });
      return;
    }
    next();
  } catch (err) {
    handleGenericAPIError("RegisterValidator", req, res, err);
  }
};

module.exports={loginValidator,registerValidator}
