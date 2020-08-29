const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
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
		},
		duration: {
			type: Number,
		},
		price: {
			type: String,
		},
		rating: {
			type: Number,
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
