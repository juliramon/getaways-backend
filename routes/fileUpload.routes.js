const express = require("express");
const router = express.Router();
const uploader = require("../configs/cloudinary.config");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
	console.log("upload listo, req.file =>", req.body);
	if (!req.file) {
		next(new Error("No file uploaded!"));
		return;
	}
	res.json({path: req.file.path});
});

module.exports = router;
