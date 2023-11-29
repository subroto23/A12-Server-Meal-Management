const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AllmealsRoute = require("./Router/AllMeals/AllMeals");
const UpcommingRoute = require("./Router/UpcommingRoute/UpcommingRoute");

//middleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes Declear Start

//All meals Route
app.use("/api/meals", AllmealsRoute);

//UpComming Route
app.use("/api/upcomming", UpcommingRoute);

//Error Router
app.use((err, req, res, next) => {
  res.statusCode(500).send("Something went wrong");
});

module.exports = app;
