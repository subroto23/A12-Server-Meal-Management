const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//middleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes Declear Start

//Error Router
app.use((err, req, res, next) => {
  res.statusCode(500).send("Something went wrong");
});

module.exports = app;
