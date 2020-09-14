const express = require("express");

const {
	signUpUser,
	completeUserAccount,
	logInUser,
	logOutUser,
	checkLoggedInUser,
	signUpGoogleUser,
} = require("../controllers/auth.controllers");

const router = express.Router();

router
	.post("/auth/signup", signUpUser)
	.put("/auth/complete-account", completeUserAccount)
	.post("/auth/login", logInUser)
	.post("/auth/logout", logOutUser)
	.get("/auth/loggedin", checkLoggedInUser)
	.post("/auth/googlesignup", signUpGoogleUser);

module.exports = router;
