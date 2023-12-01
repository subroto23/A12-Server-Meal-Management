const express = require("express");
const AllReviewPostController = require("../../Controller/ReviewController/AllReviewPostController");
const AllReviewGetController = require("../../Controller/ReviewController/AllReviewGetController");
const ReviewsRoute = express.Router();
//
ReviewsRoute.get("/", AllReviewGetController);
ReviewsRoute.post("/create", AllReviewPostController);
//
module.exports = ReviewsRoute;
