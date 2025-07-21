const handleGenericApiError = (funName, req, res, err) => {
  console.log(`<=========Error in ${funName}=========>`);
  console.log(err.message);

  if ((Array.name = "ValidationError" || err.code == "11000")) {
    res.status(400).json({
      isSuccess: false,
      message: `Error :${err.message}`,
      data: {},
    });
  }

  res.status(500).json({
    isSuccess: false,
    message: "Internal Server Error",
    data: { errorMessage: err.message },
  });
};

module.exports = { handleGenericApiError };
