const express = require("express");
const router = express.Router();
const Activity = require("../models/activity-model");
const Place = require("../models/place-model");
const Story = require("../models/story-model");
const User = require("../models/user-model");
const Bookmark = require("../models/bookmark-model");

router.post("/activity", (req, res, next) => {
	Activity.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		categories: req.body.categories,
		seasons: req.body.seasons,
		region: req.body.region,
		images: req.body.image,
		description: req.body.description,
		phone: req.body.phone,
		website: req.body.website,
		activity_full_address: req.body.activity_full_address,
		activity_locality: req.body.activity_locality,
		activity_province: req.body.activity_province,
		activity_state: req.body.activity_state,
		activity_country: req.body.activity_country,
		activity_lat: req.body.activity_lat,
		activity_lng: req.body.activity_lng,
		activity_rating: req.body.activity_rating,
		activity_place_id: req.body.activity_place_id,
		activity_opening_hours: req.body.activity_opening_hours,
		duration: req.body.duration,
		price: req.body.price,
		owner: req.user._id,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.get("/activities", (req, res, next) => {
	Activity.find({isRemoved: false})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
});

router.get("/users/:id/activities", (req, res, next) => {
	//solo deberia funcionar si el user esta autenticado => isAuthenticated
	// passport middleware
	Activity.find({owner: req.params.id, isRemoved: false})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
});

router.get("/activities/:id", (req, res, next) => {
	Activity.findById(req.params.id)
		.populate("owner")
		.then((activity) => res.json(activity))
		.catch((err) => res.json(err));
});

router.put("/activities/:id", (req, res, next) => {
	if (req.body.isRemoved === true) {
		Activity.findByIdAndUpdate(req.params.id, {isRemoved: true})
			.then(() => res.json({message: "Activity removed successfully"}))
			.catch((err) => res.json(err));
	} else {
		Activity.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "Activity updated successfully"}))
			.catch((err) => res.json(err));
	}
});

router.get("/users", (req, res, next) => {
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
	if (req.body.cover) {
		User.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "User updated"}))
			.catch((err) => res.json(err));
	} else {
		User.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "User updated"}))
			.catch((err) => res.json(err));
	}
});

router.post("/place", (req, res, next) => {
	Place.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		categories: req.body.categories,
		seasons: req.body.seasons,
		region: req.body.region,
		placeType: req.body.placeType,
		images: req.body.image,
		description: req.body.description,
		phone: req.body.phone,
		website: req.body.website,
		place_full_address: req.body.place_full_address,
		place_locality: req.body.place_locality,
		place_province: req.body.place_province,
		place_state: req.body.place_state,
		place_country: req.body.place_country,
		place_lat: req.body.place_lat,
		place_lng: req.body.place_lng,
		place_rating: req.body.place_rating,
		place_id: req.body.place_id,
		place_opening_hours: req.body.place_opening_hours,
		price: req.body.price,
		owner: req.user._id,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.get("/places", (req, res, next) => {
	Place.find({isRemoved: false})
		.then((places) => res.json(places))
		.catch((err) => res.json(err));
});

router.get("/users/:id/places", (req, res, next) => {
	Place.find({owner: req.params.id, isRemoved: false})
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
	if (req.body.isRemoved === true) {
		Place.findByIdAndUpdate(req.params.id, {isRemoved: true})
			.then((res) => res.json({message: "Place removed successfully"}))
			.catch((err) => res.json(err));
	} else {
		Place.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "Place updated successfully"}))
			.catch((err) => res.json(err));
	}
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

router.get("/stories", (req, res, next) => {
	Story.find({isRemoved: false})
		.then((stories) => res.json(stories))
		.catch((err) => res.json(err));
});

router.get("/users/:id/stories", (req, res, next) => {
	Story.find({owner: req.params.id, isRemoved: false})
		.then((stories) => res.json(stories))
		.catch((err) => res.json(err));
});

router.get("/stories/:id", (req, res, next) => {
	Story.findById(req.params.id)
		.populate("owner")
		.then((story) => res.json(story))
		.catch((err) => res.json(err));
});

router.put("/stories/:id", (req, res, next) => {
	console.log(req.body);
	if (req.body.isRemoved === true) {
		Story.findByIdAndUpdate(req.params.id, {isRemoved: true})
			.then((res) => res.json({message: "Story removed successfully"}))
			.catch((err) => res.json(err));
	} else {
		Story.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "Story updated successfully"}))
			.catch((err) => res.json(err));
	}
});

router.post("/bookmark", (req, res, next) => {
	let contentRef;
	if (req.body.listingType === "activity") {
		contentRef = "bookmarkActivityRef";
	} else if (req.body.listingType === "place") {
		contentRef = "bookmarkPlaceRef";
	} else {
		contentRef = "bookmarkStoryRef";
	}
	Bookmark.find({[contentRef]: req.body.listingId}).then((arrBookmarks) => {
		let bookmark = arrBookmarks[0];
		if (bookmark) {
			if (bookmark.isRemoved === false) {
				Bookmark.updateOne({_id: bookmark._id}, {isRemoved: true}).then(() =>
					res
						.json({message: "Listing removed from bookmarks!"})
						.catch((err) => res.json(err))
				);
			} else if (bookmark.isRemoved === true) {
				Bookmark.updateOne({_id: bookmark._id}, {isRemoved: false})
					.then(() => res.json({message: "Listing bookmarked!"}))
					.catch((err) => res.json(err));
			}
		} else {
			Bookmark.create({
				[contentRef]: req.body.listingId,
				owner: req.user._id,
			})
				.then((res) => res.json({message: "Listing bookmarked!"}))
				.catch((err) => res.json(err));
		}
	});
});

router.get("/activebookmarks", (req, res, next) => {
	Bookmark.find({owner: req.user._id, isRemoved: false})
		.populate("owner")
		.populate("bookmarkActivityRef")
		.populate("bookmarkPlaceRef")
		.populate("bookmarkStoryRef")
		.then((bookmarks) => res.json(bookmarks))
		.catch((err) => res.json(err));
});

router.get("/bookmarks", (req, res, next) => {
	Bookmark.find({owner: req.user._id})
		.populate("owner")
		.populate("bookmarkActivityRef")
		.populate("bookmarkPlaceRef")
		.populate("bookmarkStoryRef")
		.then((bookmarks) => res.json(bookmarks))
		.catch((err) => res.json(err));
});

router.get("/searchPlaces", (req, res, next) => {
	if (
		req.query.placeRegion ||
		req.query.placeType ||
		req.query.placeSeason ||
		req.query.placeCategory
	) {
		let placeType, placeRegion, placeSeason, placeCategory;
		if (req.query.placeType) {
			if (typeof req.query.placeType === "string") {
				placeType = req.query.placeType.split(",");
			} else {
				placeType = req.query.placeType;
			}
		} else {
			placeType = [
				"apartment",
				"cabin",
				"treeHouse",
				"ruralHouse",
				"trailer",
				"hotel",
			];
		}
		if (req.query.placeRegion) {
			if (typeof req.query.placeRegion === "string") {
				placeRegion = req.query.placeRegion.split(",");
			} else {
				placeRegion = req.query.placeRegion;
			}
		} else {
			placeRegion = [
				"barcelona",
				"tarragona",
				"girona",
				"lleida",
				"costaBrava",
				"costaDaurada",
				"pirineus",
			];
		}
		if (req.query.placeSeason) {
			if (typeof req.query.placeSeason === "string") {
				placeSeason = req.query.placeSeason.split(",");
			} else {
				placeSeason = req.query.placeSeason;
			}
		} else {
			placeSeason = ["winter", "spring", "summer", "autumn"];
		}
		if (req.query.placeCategory) {
			if (typeof req.query.placeCategory === "string") {
				placeCategory = req.query.placeCategory.split(",");
			} else {
				placeCategory = req.query.placeCategory;
			}
		} else {
			placeCategory = [
				"romantic",
				"adventure",
				"gastronomic",
				"cultural",
				"relax",
			];
		}
		Place.find({
			$and: [
				{placeType: {$in: placeType}},
				{region: {$in: placeRegion}},
				{seasons: {$in: placeSeason}},
				{categories: {$in: placeCategory}},
			],
		}).then((results) => {
			res.json(results);
		});
	} else {
		Place.find({}).then((results) => res.json(results));
	}
});

router.get("/searchActivities", (req, res, next) => {
	if (
		req.query.activityRegion ||
		req.query.activitySeason ||
		req.query.activityCategory
	) {
		let activityRegion, activitySeason, activityCategory;
		if (req.query.activityRegion) {
			if (typeof req.query.activityRegion === "string") {
				activityRegion = req.query.activityRegion.split(",");
			} else {
				activityRegion = req.query.activityRegion;
			}
		} else {
			activityRegion = [
				"barcelona",
				"tarragona",
				"girona",
				"lleida",
				"costaBrava",
				"costaDaurada",
				"pirineus",
			];
		}
		if (req.query.activitySeason) {
			if (typeof req.query.activitySeason === "string") {
				activitySeason = req.query.activitySeason.split(",");
			} else {
				activitySeason = req.query.activitySeason;
			}
		} else {
			activitySeason = ["winter", "spring", "summer", "autumn"];
		}
		if (req.query.activityCategory) {
			if (typeof req.query.activityCategory === "string") {
				activityCategory = req.query.activityCategory.split(",");
			} else {
				activityCategory = req.query.activityCategory;
			}
		} else {
			activityCategory = [
				"romantic",
				"adventure",
				"gastronomic",
				"cultural",
				"relax",
			];
		}
		Activity.find({
			$and: [
				{region: {$in: activityRegion}},
				{seasons: {$in: activitySeason}},
				{categories: {$in: activityCategory}},
			],
		}).then((results) => {
			res.json(results);
		});
	} else {
		Activity.find({}).then((results) => res.json(results));
	}
});

module.exports = router;
