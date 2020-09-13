require("dotenv").config();
require("./configs/session.config");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

const passport = require("passport");

require("./configs/db.config");
require("./configs/passport");

const app_name = require("./package.json").name;
const debug = require("debug")(
	`${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000",
			"http://localhost:3001",
			"https://getaways-guru.herokuapp.com",
			"http://getaways.guru",
			"http://www.getaways.guru",
		],
	})
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "build")));
app.use(favicon(path.join(__dirname, "/build/favicon.ico")));

app.use(passport.initialize());
app.use(passport.session());

const index = require("./routes/index");
const authRoutes = require("./routes/auth.routes");
const contentRoutes = require("./routes/content.routes");
const fileUploadRoutes = require("./routes/fileUpload.routes");

app.use("/", index);
app.use("/api", authRoutes);
app.use("/api", contentRoutes);
app.use("/api", fileUploadRoutes);

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
