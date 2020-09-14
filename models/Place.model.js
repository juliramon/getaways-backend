const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
	{
		type: {
			type: String,
			defult: "place",
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
		placeType: {
			type: [String],
			enum: [
				"apartment",
				"cabin",
				"treeHouse",
				"ruralHouse",
				"trailer",
				"hotel",
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
		place_full_address: {
			type: String,
			required: true,
		},
		place_locality: {
			type: String,
		},
		place_province: {
			type: String,
		},
		place_state: {
			type: String,
		},
		place_country: {
			type: String,
		},
		place_lat: {
			type: String,
		},
		place_lng: {
			type: String,
		},
		place_rating: {
			type: Number,
			min: 0,
			default: 0,
			max: 5,
		},
		place_id: {
			type: String,
		},
		place_opening_hours: {
			type: Array,
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

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
