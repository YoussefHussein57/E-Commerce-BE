const mongoose = require("mongoose");

//this function is used to connect to db

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mvc1");
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
