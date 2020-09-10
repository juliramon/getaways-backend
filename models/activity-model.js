const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
	{
		type: {
			type: String,
			default: "activity",
		},
		categories: {
			type: [String],
			enum: ["romantic", "adventure", "gastronomic", "cultural", "relax"],
			required: true,
		},
		seasons: {
			type: [String],
			enum: ["winter", "spring", "summer", "autumn"],
			required: true,
		},
		region: {
			type: [String],
			enum: [
				"barcelona",
				"tarragona",
				"girona",
				"lleida",
				"costaBrava",
				"costaDaurada",
				"pirineus",
			],
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		website: {
			type: String,
			required: true,
		},
		activity_full_address: {
			type: String,
			required: true,
		},
		activity_locality: {
			type: String,
		},
		activity_province: {
			type: String,
		},
		activity_state: {
			type: String,
		},
		activity_country: {
			type: String,
		},
		activity_lat: {
			type: String,
		},
		activity_lng: {
			type: String,
		},
		activity_rating: {
			type: Number,
			min: 0,
			default: 0,
			max: 5,
		},
		activity_place_id: {
			type: String,
		},
		activity_opening_hours: {
			type: Array,
		},
		duration: {
			type: Number,
			min: 0,
			default: 0,
			required: true,
		},
		price: {
			type: Number,
			min: 0,
			default: 0,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		isRemoved: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
