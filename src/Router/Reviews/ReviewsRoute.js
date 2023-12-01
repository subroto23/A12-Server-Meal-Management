const express = require("express");
const AllReviewPostController = require("../../Controller/ReviewController/AllReviewPostController");
const AllReviewGetController = require("../../Controller/ReviewController/AllReviewGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const ReviewsRoute = express.Router();
//
ReviewsRoute.get("/", AllReviewGetController);
ReviewsRoute.post("/create", VerifyToken, AllReviewPostController);
//
module.exports = ReviewsRoute;
