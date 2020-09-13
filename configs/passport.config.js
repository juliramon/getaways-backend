const User = require("../models/User.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id));

passport.deserializeUser((userIdFromSession, cb) => {
	User.findById(userIdFromSession, (err, userDocument) => {
		if (err) {
			return cb(err);
		}
		cb(null, userDocument);
	});
});

passport.use(
	new LocalStrategy((email, password, next) => {
		User.findOne({email}, (err, foundUser) => {
			if (err) {
				return next(err);
			}
			if (!foundUser) {
				return next(null, false, {message: "Incorrect email"});
			}
			if (!bcrypt.compareSync(password, foundUser.password)) {
				return next(null, false, {message: "Incorrect password"});
			}
			next(null, foundUser);
		});
	})
);
