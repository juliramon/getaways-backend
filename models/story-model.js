const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema(
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
		status: {
			type: String,
			enum: ["editing", "posted", "archived"],
		},
		likes: {
			type: Number,
			min: 0,
			default: 0,
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

const Story = mongoose.model("Story", storySchema);
module.exports = Story;
