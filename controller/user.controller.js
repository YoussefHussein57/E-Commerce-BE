const userModal = require("../models/user.model");
const hashing = require("../utilities/hashing");
const auth = require("../utilities/Auth");
exports.createUser = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await hashing.hashPassword(password);
    req.body.password = hashedPassword;
    const user = await userModal.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModal.findOne({ email }).populate('userType');
    if (user) {
      const isValidPassword = await hashing.isMatch(password, user.password);
      if (isValidPassword) {
        // Return Access token
        const token = auth.createAccessToken({
          userId: user._id,
          userName:user.name,
          userType: user.userType.name,
        });

        res.status(200).json({ accessToken: token });
      } else {
        res.status(401).json({ message: "Invalid Password" });
      } 
    } else {
      res.status(401).json({ message: "Invalid Email" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await userModal.find();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUserById = async (req ,res)=>{
  try{
    const id = req.params.id;
    const user = await userModal.findByIdAndDelete(id);
    res.status(200).json( 200, {Message:"User Deleted Successfully"});
    }catch(err){
      res.status(500).json({message:err.message});
  }
}