const express = require("express");
const UsersRoute = express.Router();
const UsersPostController = require("../../Controller/UsersController/UsersController");
const UserPostCreateController = require("../../Controller/UsersController/UserPostCreateController");
const UsersGetController = require("../../Controller/UsersController/UsersGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const UsersPatchController = require("../../Controller/UsersController/UsersPatchController");
const UsersGetAdminController = require("../../Controller/UsersController/UsersGetAdminController");
const UsersCatagoryPatch = require("../../Controller/UsersController/UsersCatagoryPathc");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");

UsersRoute.get("/all/users", VerifyToken, UsersGetController);
UsersRoute.get("/admin/:email", VerifyToken, UsersGetAdminController);
UsersRoute.patch(
  "/user/make-admin",
  VerifyToken,
  VerifyAdmin,
  UsersPatchController
);
UsersRoute.patch("/user/catagory", VerifyToken, UsersCatagoryPatch);
UsersRoute.post("/", UsersPostController);
UsersRoute.post("/create/user", UserPostCreateController);
module.exports = UsersRoute;
