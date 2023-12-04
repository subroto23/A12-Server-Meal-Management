const express = require("express");
const AllReviewPostController = require("../../Controller/ReviewController/AllReviewPostController");
const AllReviewGetController = require("../../Controller/ReviewController/AllReviewGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const ReviewDeleteController = require("../../Controller/ReviewController/ReviewDeleteController");
const UserReviesController = require("../../Controller/ReviewController/UserReviewGetController");
const UserReviewDeleteController = require("../../Controller/ReviewController/UserReviewDeleteController");
const UserReviewPutController = require("../../Controller/ReviewController/UserReviewPutController");
const ReviewsRoute = express.Router();
//
ReviewsRoute.get("/", AllReviewGetController);
ReviewsRoute.get("/review/:email", VerifyToken, UserReviesController);
ReviewsRoute.post("/create", VerifyToken, AllReviewPostController);
ReviewsRoute.put("/update/:id", VerifyToken, UserReviewPutController);
ReviewsRoute.delete(
  "/delete/user/review/:id",
  VerifyToken,
  UserReviewDeleteController
);
ReviewsRoute.delete(
  "/delete/:id",
  VerifyToken,
  VerifyAdmin,
  ReviewDeleteController
);
//
module.exports = ReviewsRoute;
