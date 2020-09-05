const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
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
		location: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["editing", "posted", "archived"],
		},
		duration: {
			type: Number,
			min: 0,
			default: 0,
		},
		price: {
			type: String,
			min: 0,
			default: 0,
		},
		rating: {
			type: Number,
			min: 0,
			default: 0,
			max: 5,
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

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
