var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// get the dot environment file
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// Import routes for "catalog" area of site
const catalogRouter = require("./routes/catalog");

const compression = require("compression");
const helmet = require("helmet");

var app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
const { mainModule } = require("process");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI;
// console.log(process.env.MONGO_URI);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(compression()); // Compress all routes
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
