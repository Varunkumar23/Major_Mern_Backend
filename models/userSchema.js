const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password.toString(), 12);
  }
  next();
});

userSchema.pre("findbyIdAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});
userSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});
userSchema.pre("updateOne", function (next) {
  this.options.runValidators = true;
  next();
});
userSchema.pre("updateMany", function (next) {
  this.options.runValidators = true;
  next();
});

const userModel = model("user", userSchema);

module.exports = { userModel };
