const express = require("express");
const UpcommingRoute = express.Router();
const UpcommingPostController = require("../../Controller/UpcommingController/UpcommingPostController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const UpcommingGetController = require("../../Controller/UpcommingController/UpCommingGetController");
const UpcommingPatchLikesController = require("../../Controller/UpcommingController/UpcommingPatchLikesController");

UpcommingRoute.get("/:email", UpcommingGetController);
UpcommingRoute.post(
  "/meal/create",
  VerifyToken,
  VerifyAdmin,
  UpcommingPostController
);
UpcommingRoute.patch(
  "/meal/likes/count",
  VerifyToken,
  UpcommingPatchLikesController
);

module.exports = UpcommingRoute;
