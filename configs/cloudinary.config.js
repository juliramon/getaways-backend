const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
	cloud_name: process.env.cloudName,
	api_key: process.env.cloudKey,
	api_secret: process.env.cloudSecret,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "getaways-guru",
		allowed_formats: ["jpg", "png", "gif"],
	},
	filename: function (req, res, cb) {
		cb(null, res.originalname);
	},
});

module.exports = multer({storage});
