const express = require("express");
const allMealsPostController = require("../../Controller/AllMeals/allMealsPostController");
const AllMealsDeleteController = require("../../Controller/AllMeals/AllMealsDeleteController");
const AllMealsUpdateController = require("../../Controller/AllMeals/AllMealsUpdateController");
const AllMealsGetControllerById = require("../../Controller/AllMeals/AllMealsGetControllerById");
const AllMealsPatchController = require("../../Controller/AllMeals/AllMealsPatchController");
const AllMealsReviewsPatchController = require("../../Controller/AllMeals/AllMealsReviewsPatchController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const allMealsGetController = require("../../Controller/AllMeals/AllMealsGetController");
const AllMealsSecureController = require("../../Controller/AllMeals/AllMealsSecureController");
const AllmealsRoute = express.Router();

AllmealsRoute.get("/admin", VerifyToken, VerifyAdmin, AllMealsSecureController);
AllmealsRoute.get("/", allMealsGetController);
AllmealsRoute.get("/:id", AllMealsGetControllerById);
AllmealsRoute.post(
  "/meal/create",
  VerifyToken,
  VerifyAdmin,
  allMealsPostController
);
AllmealsRoute.patch("/like/count", VerifyToken, AllMealsPatchController);
AllmealsRoute.patch(
  "/reviews/count",
  VerifyToken,
  AllMealsReviewsPatchController
);
AllmealsRoute.put(
  "/update/:id",
  VerifyToken,
  VerifyAdmin,
  AllMealsUpdateController
);
AllmealsRoute.delete(
  "/delete/:id",
  VerifyToken,
  VerifyAdmin,
  AllMealsDeleteController
);

module.exports = AllmealsRoute;
