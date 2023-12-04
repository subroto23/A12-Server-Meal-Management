const express = require("express");
const OrderPostController = require("../../Controller/OrdersController/OrdersPostController");
const OrderGetController = require("../../Controller/OrdersController/OrderGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const OrderDeleteController = require("../../Controller/OrdersController/OrderDeleteController");
const OrderRouter = express.Router();

OrderRouter.get("/allmeals/:email", VerifyToken, OrderGetController);
OrderRouter.post("/create", VerifyToken, OrderPostController);
OrderRouter.delete("/delete/:id", VerifyToken, OrderDeleteController);
module.exports = OrderRouter;
