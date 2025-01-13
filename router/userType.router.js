const express = require("express");
const auth = require("../utilities/Auth");

const router = express.Router();

const userTypeController = require("../controller/userType.controller");

router.post("/",auth.authMW ,userTypeController.createUserType);
router.get("/", auth.authMW, userTypeController.getUserTypes);

module.exports = router;
