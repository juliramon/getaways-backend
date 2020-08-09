const User = require("../models/user-model");
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
	new LocalStrategy((username, passwport, next) => {
		User.findOne({username}, (err, foundUser) => {
			if (err) {
				return next(err);
			}
			if (!foundUser) {
				return next(null, false, {message: "Incorrect username"});
			}
			if (!bcrypt.compareSync(password, foundUser.password)) {
				return next(null, false, {message: "Incorrect password"});
			}
			next(null, foundUser);
		});
	})
);
