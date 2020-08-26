const express = require("express");
const router = express.Router();
const Activity = require("../models/activity-model");

router.post("/activity", (req, res, next) => {
	console.log(req.body);
	Activity.create({
		title: req.body.title,
		subtitle: req.body.subtitle,
		description: req.body.description,
		location: req.body.location,
		owner: req.user._id,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.get("/activities", (req, res, next) => {
	Activity.find({})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
});

router.get("/userActivities", (req, res, next) => {
	//solo deberia funcionar si el user esta autenticado => isAuthenticated
	// passport middleware
	Activity.find({owner: req.user._id})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
});

module.exports = router;
