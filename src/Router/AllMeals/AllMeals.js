const express = require("express");
const allMealsPostController = require("../../Controller/AllMeals/allMealsPostController");
const AllmealsRoute = express.Router();

AllmealsRoute.post("/meal/create", allMealsPostController);

module.exports = AllmealsRoute;
