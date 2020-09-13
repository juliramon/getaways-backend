const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema(
	{
		isRemoved: {
			type: Boolean,
			default: false,
		},
		bookmarkActivityRef: {
			type: Schema.Types.ObjectId,
			ref: "Activity",
		},
		bookmarkPlaceRef: {
			type: Schema.Types.ObjectId,
			ref: "Place",
		},
		bookmarkStoryRef: {
			type: Schema.Types.ObjectId,
			ref: "Story",
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

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
