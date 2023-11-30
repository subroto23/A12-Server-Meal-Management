const express = require("express");
const UsersRoute = express.Router();
const UsersPostController = require("../../Controller/UsersController/UsersController");
const UserPostCreateController = require("../../Controller/UsersController/UserPostCreateController");

UsersRoute.post("/", UsersPostController);
UsersRoute.post("/create/user", UserPostCreateController);
module.exports = UsersRoute;
