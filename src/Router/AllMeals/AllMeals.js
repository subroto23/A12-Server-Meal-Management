const express = require("express");
const allMealsPostController = require("../../Controller/AllMeals/allMealsPostController");
const allMealsGetController = require("../../Controller/AllMeals/allMealsGetController");
const AllMealsDeleteController = require("../../Controller/AllMeals/AllMealsDeleteController");
const AllmealsRoute = express.Router();

AllmealsRoute.get("/", allMealsGetController);
AllmealsRoute.post("/meal/create", allMealsPostController);
AllmealsRoute.delete("/delete/:id", AllMealsDeleteController);

module.exports = AllmealsRoute;
