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
				"https://res.cloudinary.com/juligoodie/image/upload/v1600010509/getaways-guru/static-files/default-user-avatar_cpv92p.svg",
		},
		cover: {
			type: String,
			default:
				"https://res.cloudinary.com/juligoodie/image/upload/v1600009875/getaways-guru/static-files/default-user-cover_d3wngv.png",
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
		accountCompleted: {
			type: Boolean,
			default: false,
		},
		typesToFollow: {
			type: [String],
			enum: [
				"apartment",
				"cabin",
				"treeHouse",
				"ruralHouse",
				"trailer",
				"hotel",
			],
		},
		categoriesToFollow: {
			type: [String],
			enum: ["romantic", "adventure", "gastronomic", "cultural", "relax"],
		},
		seasonsToFollow: {
			type: [String],
			enum: ["winter", "spring", "summer", "autumn"],
		},
		regionsToFollow: {
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
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
