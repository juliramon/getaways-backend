const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
	{
		type: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
		},
		images: {
			type: Array,
		},
		description: {
			type: String,
		},
		location: {
			type: String,
		},
		status: {
			type: String,
			enum: ["editing", "posted", "archived"],
		},
		price: {
			type: String,
		},
		rating: {
			type: Number,
			min: 0,
			max: 5,
			default: 0,
		},
		category: {
			type: String,
			enum: [
				"hotel",
				"apartment",
				"bubble",
				"igloo",
				"cabin",
				"country house",
				"tree house",
			],
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
