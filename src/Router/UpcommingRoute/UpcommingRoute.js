const express = require("express");
const UpcommingRoute = express.Router();
const UpcommingPostController = require("../../Controller/UpcommingController/UpcommingPostController");

UpcommingRoute.post("/meal/create", UpcommingPostController);

module.exports = UpcommingRoute;
