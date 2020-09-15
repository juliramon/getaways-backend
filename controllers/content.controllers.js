const Activity = require("../models/Activity.model");
const Place = require("../models/Place.model");
const Story = require("../models/Story.model");
const User = require("../models/User.model");
const Bookmark = require("../models/Bookmark.model");

const postActivity = (req, res, next) => {
	console.log("session", req.session);
	console.log("user in session", req.user);
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
		owner: req.user._id || req.session.passport.user,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

const getActivities = (req, res, next) => {
	Activity.find({isRemoved: false})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
};

const getUserActivities = (req, res, next) => {
	//solo deberia funcionar si el user esta autenticado => isAuthenticated
	// passport middleware
	Activity.find({owner: req.params.id, isRemoved: false})
		.then((activities) => res.json(activities))
		.catch((err) => res.json(err));
};

const getActivityDetails = (req, res, next) => {
	Activity.findById(req.params.id)
		.populate("owner")
		.then((activity) => res.json(activity))
		.catch((err) => res.json(err));
};

const editActivityDetails = (req, res, next) => {
	if (req.body.isRemoved === true) {
		Activity.findByIdAndUpdate(req.params.id, {isRemoved: true})
			.then(() => res.json({message: "Activity removed successfully"}))
			.catch((err) => res.json(err));
	} else {
		Activity.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "Activity updated successfully"}))
			.catch((err) => res.json(err));
	}
};

const getUsers = (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};

const getUserDetails = (req, res, next) => {
	User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
};

const editUserDetails = (req, res, next) => {
	if (req.body.cover) {
		User.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "User updated"}))
			.catch((err) => res.json(err));
	} else {
		User.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "User updated"}))
			.catch((err) => res.json(err));
	}
};

const postPlace = (req, res, next) => {
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
		owner: req.user._id || req.session.passport.user,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

const getPlaces = (req, res, next) => {
	Place.find({isRemoved: false})
		.then((places) => res.json(places))
		.catch((err) => res.json(err));
};

const getUserPlaces = (req, res, next) => {
	Place.find({owner: req.params.id, isRemoved: false})
		.then((places) => res.json(places))
		.catch((err) => res.json(err));
};

const getPlaceDetails = (req, res, next) => {
	Place.findById(req.params.id)
		.populate("owner")
		.then((place) => res.json(place))
		.catch((err) => res.json(err));
};

const editPlaceDetails = (req, res, next) => {
	if (req.body.isRemoved === true) {
		Place.findByIdAndUpdate(req.params.id, {isRemoved: true})
			.then((res) => res.json({message: "Place removed successfully"}))
			.catch((err) => res.json(err));
	} else {
		Place.findByIdAndUpdate(req.params.id, req.body)
			.then((res) => res.json({message: "Place updated successfully"}))
			.catch((err) => res.json(err));
	}
};

const postStory = (req, res, next) => {
	Story.create({
		type: req.body.type,
		title: req.body.title,
		subtitle: req.body.subtitle,
		images: req.body.image,
		description: req.body.description,
		owner: req.user._id || req.session.passport.user,
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

const getStories = (req, res, next) => {
	Story.find({isRemoved: false})
		.then((stories) => res.json(stories))
		.catch((err) => res.json(err));
};

const getUserStories = (req, res, next) => {
	Story.find({owner: req.params.id, isRemoved: false})
		.then((stories) => res.json(stories))
		.catch((err) => res.json(err));
};

const getStoryDetails = (req, res, next) => {
	Story.findById(req.params.id)
		.populate("owner")
		.then((story) => res.json(story))
		.catch((err) => res.json(err));
};

const editStoryDetails = (req, res, next) => {
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
};

const bookmarkListing = (req, res, next) => {
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
				owner: req.user._id || req.session.passport.user,
			})
				.then((res) => res.json({message: "Listing bookmarked!"}))
				.catch((err) => res.json(err));
		}
	});
};

const getUserBookmarks = (req, res, next) => {
	Bookmark.find({
		owner: req.user._id || req.session.passport.user,
		isRemoved: false,
	})
		.populate("owner")
		.populate("bookmarkActivityRef")
		.populate("bookmarkPlaceRef")
		.populate("bookmarkStoryRef")
		.then((bookmarks) => res.json(bookmarks))
		.catch((err) => res.json(err));
};

const getAllBookmarks = (req, res, next) => {
	Bookmark.find({owner: req.user._id || req.session.passport.user})
		.populate("owner")
		.populate("bookmarkActivityRef")
		.populate("bookmarkPlaceRef")
		.populate("bookmarkStoryRef")
		.then((bookmarks) => res.json(bookmarks))
		.catch((err) => res.json(err));
};

const searchPlaces = (req, res, next) => {
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
};

const searchActivities = (req, res, next) => {
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
};

const searchBarQuery = async (req, res, next) => {
	console.log(req.query);
	let query = req.query;
	let locationToSearch, categoriesToSearch, typesToSearch;
	if (Object.keys(query)[0] === "activityLocation") {
		if (req.query.activityLocation) {
			locationToSearch = req.query.activityLocation;
		}
		if (req.query.activityCategory) {
			categoriesToSearch = req.query.activityCategory.split(",");
		}
		if (locationToSearch && categoriesToSearch === undefined) {
			Activity.find({
				$or: [
					{region: {$regex: locationToSearch, $options: "i"}},
					{activity_full_address: {$regex: locationToSearch, $options: "i"}},
					{activity_locality: {$regex: locationToSearch, $options: "i"}},
					{activity_province: {$regex: locationToSearch, $options: "i"}},
				],
			}).then((results) => {
				res.json(results);
			});
		} else if (locationToSearch && categoriesToSearch.length > 0) {
			Activity.find({
				$and: [
					{
						$or: [
							{region: {$regex: locationToSearch, $options: "i"}},
							{
								activity_full_address: {
									$regex: locationToSearch,
									$options: "i",
								},
							},
							{activity_locality: {$regex: locationToSearch, $options: "i"}},
							{activity_province: {$regex: locationToSearch, $options: "i"}},
						],
					},
					{categories: {$in: categoriesToSearch}},
				],
			}).then((results) => {
				res.json(results);
			});
		}
	} else if (Object.keys(query)[0] === "placeLocation") {
		if (req.query.placeLocation) {
			locationToSearch = req.query.placeLocation;
		}
		if (req.query.placeCategory) {
			categoriesToSearch = req.query.placeCategory.split(",");
		}
		if (req.query.placeType) {
			typesToSearch = req.query.placeType.split(",");
		}
		if (
			locationToSearch &&
			categoriesToSearch === undefined &&
			typesToSearch === undefined
		) {
			Place.find({
				$or: [
					{region: {$regex: locationToSearch, $options: "i"}},
					{place_full_address: {$regex: locationToSearch, $options: "i"}},
					{place_locality: {$regex: locationToSearch, $options: "i"}},
					{place_province: {$regex: locationToSearch, $options: "i"}},
				],
			}).then((results) => {
				res.json(results);
			});
		} else if (locationToSearch && typesToSearch) {
			Place.find({
				$and: [
					{
						$or: [
							{region: {$regex: locationToSearch, $options: "i"}},
							{
								place_full_address: {
									$regex: locationToSearch,
									$options: "i",
								},
							},
							{place_locality: {$regex: locationToSearch, $options: "i"}},
							{place_province: {$regex: locationToSearch, $options: "i"}},
						],
					},
					{categories: {$in: categoriesToSearch}},
				],
			}).then((results) => {
				res.json(results);
			});
		} else if (locationToSearch && categoriesToSearch && typesToSearch) {
			Place.find({
				$and: [
					{
						$or: [
							{region: {$regex: locationToSearch, $options: "i"}},
							{
								place_full_address: {
									$regex: locationToSearch,
									$options: "i",
								},
							},
							{place_locality: {$regex: locationToSearch, $options: "i"}},
							{place_province: {$regex: locationToSearch, $options: "i"}},
						],
					},
					{categories: {$in: categoriesToSearch}},
					{placeType: {$in: typesToSearch}},
				],
			}).then((results) => {
				res.json(results);
			});
		}
	} else if (Object.keys(query)[0] === "query") {
		const places = await Place.find({
			$or: [
				{region: {$regex: query.query, $options: "i"}},
				{place_full_address: {$regex: query.query, $options: "i"}},
				{place_locality: {$regex: query.query, $options: "i"}},
				{place_province: {$regex: query.query, $options: "i"}},
				{title: {$regex: query.query, $options: "i"}},
				{subtitle: {$regex: query.query, $options: "i"}},
				{title: {$regex: query.query, $options: "i"}},
				{description: {$regex: query.query, $options: "i"}},
			],
		});
		const activities = await Activity.find({
			$or: [
				{region: {$regex: query.query, $options: "i"}},
				{activity_full_address: {$regex: query.query, $options: "i"}},
				{activity_locality: {$regex: query.query, $options: "i"}},
				{activity_province: {$regex: query.query, $options: "i"}},
				{title: {$regex: query.query, $options: "i"}},
				{subtitle: {$regex: query.query, $options: "i"}},
				{title: {$regex: query.query, $options: "i"}},
				{description: {$regex: query.query, $options: "i"}},
			],
		});

		res.json({places: places, activities: activities});
	}
};

const searchUserCustomActivities = (req, res, next) => {
	console.log(req.user);
	let {categoriesToFollow, seasonsToFollow, regionsToFollow} = req.user;
	Activity.find({
		$or: [
			{categories: {$in: categoriesToFollow}},
			{seasons: {$in: seasonsToFollow}},
			{region: {$in: regionsToFollow}},
		],
	}).then((results) => res.json(results));
};

const searchUserCustomPlaces = (req, res, next) => {
	console.log(req.user);
	let {
		typesToFollow,
		categoriesToFollow,
		seasonsToFollow,
		regionsToFollow,
	} = req.user;
	Place.find({
		$or: [
			{categories: {$in: categoriesToFollow}},
			{seasons: {$in: seasonsToFollow}},
			{region: {$in: regionsToFollow}},
			{placeType: {$in: typesToFollow}},
		],
	}).then((results) => res.json(results));
};

module.exports = {
	postActivity,
	getActivities,
	getUserActivities,
	getActivityDetails,
	editActivityDetails,
	getUsers,
	getUserDetails,
	editUserDetails,
	postPlace,
	getPlaces,
	getUserPlaces,
	getPlaceDetails,
	editPlaceDetails,
	postStory,
	getStories,
	getUserStories,
	getStoryDetails,
	editStoryDetails,
	bookmarkListing,
	getUserBookmarks,
	getAllBookmarks,
	searchPlaces,
	searchActivities,
	searchBarQuery,
	searchUserCustomActivities,
	searchUserCustomPlaces,
};
