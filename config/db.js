const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "Major_Project_Mern",
  })
  .then(() => {
    console.log("Database Connected Successfully ✅");
  })
  .catch((err) => {
    console.log("Database Connection Error ❌");
  });
