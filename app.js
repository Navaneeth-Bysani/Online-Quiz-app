const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const path = require("path");
const middleware = require("./utils/middleware");
const clientEndpoints = ["discover", "profile", "update"];
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController.js");

const questionsRouter = require("./routes/questionRoutes.js");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(xss());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());

app.use(middleware.requestLogger);

app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/v1/questions",questionsRouter);
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
