const express = require("express");

const {
	postActivity,
	getActivities,
	getUserActivities,
	getActivityDetails,
	editActivityDetails,
	getUsers,
	getUserDetails,
	editUserDetails,
	editAccountSettings,
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
} = require("../controllers/content.controllers");

const router = express.Router();

router
	.post("/activity", postActivity)
	.get("/activities", getActivities)
	.get("/users/:id/activities", getUserActivities)
	.get("/activities/:id", getActivityDetails)
	.put("/activities/:id", editActivityDetails)
	.get("/users", getUsers)
	.get("/users/:id", getUserDetails)
	.put("/users/:id/settings", editAccountSettings)
	.put("/users/:id", editUserDetails)	
	.post("/place", postPlace)
	.get("/places", getPlaces)
	.get("/users/:id/places", getUserPlaces)
	.get("/places/:id", getPlaceDetails)
	.put("/places/:id", editPlaceDetails)
	.post("/story", postStory)
	.get("/stories", getStories)
	.get("/users/:id/stories", getUserStories)
	.get("/stories/:id", getStoryDetails)
	.put("/stories/:id", editStoryDetails)
	.post("/bookmark", bookmarkListing)
	.get("/activebookmarks", getUserBookmarks)
	.get("/bookmarks", getAllBookmarks)
	.get("/searchPlaces", searchPlaces)
	.get("/searchActivities", searchActivities)
	.get("/searchQuery", searchBarQuery)
	.get("/searchUserCustomActivities", searchUserCustomActivities)
	.get("/searchUserCustomPlaces", searchUserCustomPlaces);

module.exports = router;
