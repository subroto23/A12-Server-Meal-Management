const express = require("express");
const AllReviewPostController = require("../../Controller/ReviewController/AllReviewPostController");
const AllReviewGetController = require("../../Controller/ReviewController/AllReviewGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const ReviewDeleteController = require("../../Controller/ReviewController/ReviewDeleteController");
const ReviewsRoute = express.Router();
//
ReviewsRoute.get("/", AllReviewGetController);
ReviewsRoute.post("/create", VerifyToken, AllReviewPostController);
ReviewsRoute.delete(
  "/delete/:id",
  VerifyToken,
  VerifyAdmin,
  ReviewDeleteController
);
//
module.exports = ReviewsRoute;
