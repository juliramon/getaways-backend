const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
		},
		avatar: {
			type: String,
			default:
				"https://res.cloudinary.com/juligoodie/image/upload/v1597507413/Getaways.guru/empty-avatar_jg3ooj.svg",
		},
		cover: {
			type: String,
		},
		username: {
			type: String,
		},
		bio: {
			type: String,
		},
		location: {
			type: String,
		},
		following: {
			type: Array,
		},
		followers: {
			type: Array,
		},
		userType: {
			type: String,
		},
		bookmarks: {
			type: Schema.Types.ObjectId,
			ref: "Bookmark",
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
