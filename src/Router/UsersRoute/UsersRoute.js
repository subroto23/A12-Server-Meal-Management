const express = require("express");
const UsersRoute = express.Router();
const UsersPostController = require("../../Controller/UsersController/UsersController");
const UserPostCreateController = require("../../Controller/UsersController/UserPostCreateController");
const UsersGetController = require("../../Controller/UsersController/UsersGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const UsersPatchController = require("../../Controller/UsersController/UsersPatchController");

UsersRoute.get("/all/users", UsersGetController);
UsersRoute.patch("/user/make-admin", UsersPatchController);
UsersRoute.post("/", UsersPostController);
UsersRoute.post("/create/user", UserPostCreateController);
module.exports = UsersRoute;
