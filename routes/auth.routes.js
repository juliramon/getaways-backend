const express = require("express");

const {
	signUpUser,
	logInUser,
	logOutUser,
	checkLoggedInUser,
	signUpGoogleUser,
} = require("../controllers/auth.controllers");

const router = express.Router();

router
	.post("/auth/signup", signUpUser)
	.post("/auth/login", logInUser)
	.post("/auth/logout", logOutUser)
	.get("/auth/loggedin", checkLoggedInUser)
	.post("/auth/googlesignup", signUpGoogleUser);

module.exports = router;
