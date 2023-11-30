const express = require("express");
const UpcommingPostController = require("../../Controller/UpcommingController/UpcommingPostController");
const UpcommingRoute = express.Router();

UpcommingRoute.post("/meal/create", UpcommingPostController);

module.exports = UpcommingRoute;
