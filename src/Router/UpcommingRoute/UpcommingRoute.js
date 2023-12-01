const express = require("express");
const UpcommingRoute = express.Router();
const UpcommingPostController = require("../../Controller/UpcommingController/UpcommingPostController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");

UpcommingRoute.post(
  "/meal/create",
  VerifyToken,
  VerifyAdmin,
  UpcommingPostController
);

module.exports = UpcommingRoute;
