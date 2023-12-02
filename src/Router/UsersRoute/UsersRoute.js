const express = require("express");
const UsersRoute = express.Router();
const UsersPostController = require("../../Controller/UsersController/UsersController");
const UserPostCreateController = require("../../Controller/UsersController/UserPostCreateController");
const UsersGetController = require("../../Controller/UsersController/UsersGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const UsersPatchController = require("../../Controller/UsersController/UsersPatchController");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const UsersGetAdminController = require("../../Controller/UsersController/UsersGetAdminController");

UsersRoute.get("/all/users", VerifyToken, UsersGetController);
UsersRoute.get("/admin/:email", VerifyToken, UsersGetAdminController);
UsersRoute.patch(
  "/user/make-admin",
  VerifyToken,
  VerifyAdmin,
  UsersPatchController
);
UsersRoute.post("/", UsersPostController);
UsersRoute.post("/create/user", UserPostCreateController);
module.exports = UsersRoute;
