const express = require("express");
const router = express.Router();
const Activity = require("../models/activity-model");
const Place = require("../models/place-model");
const Story = require("../models/story-model");
const User = require("../models/user-model");

router.post("/activity", (req, res, next) => {
	Activity.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		images: req.body.image,
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

router.get("/users/:id/activities", (req, res, next) => {
	//solo deberia funcionar si el user esta autenticado => isAuthenticated
	// passport middleware
	Activity.find({owner: req.params.id})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
});

router.get("/activities/:id", (req, res, next) => {
	Activity.findById(req.params.id)
		.populate("owner")
		.then((activity) => res.json(activity))
		.catch((err) => res.json(err));
});

router.delete("/activities/:id", (req, res, next) => {
	console.log(req.params.id);
	Activity.findByIdAndRemove(req.params.id)
		.then(() => res.json({message: "Activity removed successfully"}))
		.catch((err) => res.json(err));
});

router.put("/activities/:id", (req, res, next) => {
	console.log(req.body);
	Activity.findByIdAndUpdate(req.params.id, req.body)
		.then((res) => res.json({message: "Activity updated successfully"}))
		.catch((err) => res.json(err));
});

router.get("/users/", (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
});

router.get("/users/:id", (req, res, next) => {
	User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
});

router.put("/users/:id", (req, res, next) => {
	console.log(req.body);
	User.findByIdAndUpdate(req.params.id, req.body)
		.then((res) => res.json({message: "User updated"}))
		.catch((err) => res.json(err));
});

router.post("/place", (req, res, next) => {
	Place.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		images: req.body.image,
		description: req.body.description,
		location: req.body.location,
		owner: req.user._id,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.get("/users/:id/places", (req, res, next) => {
	Place.find({owner: req.params.id})
		.then((places) => res.json(places))
		.catch((err) => res.json(err));
});

router.get("/places/:id", (req, res, next) => {
	Place.findById(req.params.id)
		.populate("owner")
		.then((place) => res.json(place))
		.catch((err) => res.json(err));
});

router.put("/places/:id", (req, res, next) => {
	console.log(req.body);
	Place.findByIdAndUpdate(req.params.id, req.body)
		.then((res) => res.json({message: "Place updated successfully"}))
		.catch((err) => res.json(err));
});

router.delete("/places/:id", (req, res, next) => {
	Place.findByIdAndRemove(req.params.id)
		.then(() => res.json({message: "Place removed successfully"}))
		.catch((err) => res.json(err));
});

router.post("/story", (req, res, next) => {
	Story.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		images: req.body.image,
		description: req.body.description,
		owner: req.user._id,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.get("/users/:id/stories", (req, res, next) => {
	Story.find({owner: req.params.id})
		.then((places) => res.json(places))
		.catch((err) => res.json(err));
});

router.get("/stories/:id", (req, res, next) => {
	Story.findById(req.params.id)
		.populate("owner")
		.then((place) => res.json(place))
		.catch((err) => res.json(err));
});

router.put("/stories/:id", (req, res, next) => {
	console.log(req.body);
	Story.findByIdAndUpdate(req.params.id, req.body)
		.then((res) => res.json({message: "Story updated successfully"}))
		.catch((err) => res.json(err));
});

router.delete("/stories/:id", (req, res, next) => {
	Story.findByIdAndRemove(req.params.id)
		.then(() => res.json({message: "Story removed successfully"}))
		.catch((err) => res.json(err));
});

module.exports = router;
