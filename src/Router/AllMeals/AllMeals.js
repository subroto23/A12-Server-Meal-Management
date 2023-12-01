const express = require("express");
const allMealsPostController = require("../../Controller/AllMeals/allMealsPostController");
const allMealsGetController = require("../../Controller/AllMeals/allMealsGetController");
const AllMealsDeleteController = require("../../Controller/AllMeals/AllMealsDeleteController");
const AllMealsUpdateController = require("../../Controller/AllMeals/AllMealsUpdateController");
const AllMealsGetControllerById = require("../../Controller/AllMeals/AllMealsGetControllerById");
const AllMealsPatchController = require("../../Controller/AllMeals/AllMealsPatchController");
const AllMealsReviewsPatchController = require("../../Controller/AllMeals/AllMealsReviewsPatchController");
const AllmealsRoute = express.Router();

AllmealsRoute.get("/", allMealsGetController);
AllmealsRoute.get("/:id", AllMealsGetControllerById);
AllmealsRoute.post("/meal/create", allMealsPostController);
AllmealsRoute.patch("/like/count", AllMealsPatchController);
AllmealsRoute.patch("/reviews/count", AllMealsReviewsPatchController);
AllmealsRoute.put("/update/:id", AllMealsUpdateController);
AllmealsRoute.delete("/delete/:id", AllMealsDeleteController);

module.exports = AllmealsRoute;
