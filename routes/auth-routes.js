const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/user-model");
const {deleteOne} = require("../models/user-model");

authRoutes.post("/auth/signup", (req, res, next) => {
	const {fullName, email, password} = req.body;
	if (!fullName || !email || !password) {
		return res
			.status(400)
			.json({message: "Please provide fullname, email and password"});
	}
	if (password.length < 7) {
		return res
			.status(400)
			.json({
				message:
					"Please provide a stronger password of at least 8 alphanumeric characters",
			});
	}
	User.findOne({email}, (err, foundUser) => {
		if (err) {
			return res.status(500).json({message: "Email check went bad"});
		}
		if (foundUser) {
			return res
				.status(400)
				.json({message: "Email already exists. Choose another one"});
		}
		const salt = bcrypt.genSaltSync(10);
		const hashPass = bcrypt.hashSync(password, salt);
		const newUser = new User({
			fullName: fullName,
			email: email,
			password: hashPass,
		});
		newUser.save((err) => {
			if (err) {
				return res
					.status(400)
					.json({message: "Saving user to database went wrong"});
			}
			req.login(newUser, (err) => {
				if (err) {
					return res.status(500).json({message: "Login after signup went bad"});
				}
				res.status(200).json(newUser);
			});
		});
	});
});

authRoutes.post("/auth/login", (req, res, next) => {
	passport.authenticate("local", (err, theUser, failureDetails) => {
		if (err) {
			return res
				.status(500)
				.json({message: "Something went wrong authenticating user"});
		}
		if (!theUser) {
			return res.status(401).json(failureDetails);
		}
		req.login(theUser, (err) => {
			if (err) {
				return res.status(500).json({message: "Session save went bad."});
			}
			res.status(200).json(theUser);
		});
	})(req, res, next);
});

authRoutes.post("/auth/logout", (req, res, next) => {
	req.logout();
	res.status(200).json({message: "Log out success!"});
});

authRoutes.get("/auth/loggedin", (req, res, next) => {
	if (req.isAuthenticated()) {
		return res.status(200).json(req.user);
	}
	res.status(403).json({message: "Unauthorized"});
});

module.exports = authRoutes;
