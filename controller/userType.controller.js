const userTypeModal = require("../models/userType.model");

exports.createUserType = async (req, res) => {
  try {
    // const userTypeId = req.user.userType;
    // const myUserType = await userTypeModal.findById(userTypeId);
    // if (myUserType.name === "admin") {
      const userType = await userTypeModal.create(req.body);
      res
        .status(201)
        .json({ message: "User Type Created Successfully", data: userType });
    // } else {
    //   res
    //     .status(403)
    //     .json({ message: "You are not authorized to create user type" });
    // }
  } catch (err) {
    res.status(500).json({ message: "Error Occured", data: err.message });
  }
};

exports.getUserTypes = async (req, res) => {
  try {
    const userType = await userTypeModal.find();
    res
      .status(200)
      .json({ message: "User Types Fetched Successfully", data: userType });
  } catch (err) {
    res.status(500).json({ message: "Error Occured", data: err.message });
  }
};
