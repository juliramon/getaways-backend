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
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
