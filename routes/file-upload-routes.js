const express = require("express");
const router = express.Router();
const uploader = require("../configs/cloudinary-setup");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
	console.log("upload listo");
	console.log("req.file =>", req.body);

	if (!req.file) {
		next(new Error("No file uploaded!"));
		return;
	}
	// get secure_url from the file object and save it in the
	// variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
	res.json({path: req.file.path});
});

module.exports = router;
