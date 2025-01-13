const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    //we need to connect this to the userType Folder
    type: mongoose.Schema.Types.ObjectId,
    ref: "userType",
    required: true,
  },
},{
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
