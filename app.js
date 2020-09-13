require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");
require("./configs/passport");

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((x) => {
		console.log(
			`Connected to Mongo! Database name: "${x.connections[0].name}"`
		);
	})
	.catch((err) => {
		console.error("Error connecting to mongo", err);
	});

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
			"https://www.getaways.guru",
		],
	})
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "build")));

// app.use(
// 	require("node-sass-middleware")({
// 		src: path.join(__dirname, "public"),
// 		dest: path.join(__dirname, "public"),
// 		sourceMap: true,
// 	})
// );

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(
	session({
		secret: "secret string",
		resave: true,
		saveUninitialized: true,
		cookie: {maxAge: 6000000000},
	})
);
app.use(passport.initialize());
app.use(passport.session());

const index = require("./routes/index");
const authRoutes = require("./routes/auth-routes");
const contentRoutes = require("./routes/content-routes");
app.use("/", index);
app.use("/api", authRoutes);
app.use("/api", contentRoutes);
app.use("/api", require("./routes/file-upload-routes"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
