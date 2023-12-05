const express = require("express");
const OrderPostController = require("../../Controller/OrdersController/OrdersPostController");
const OrderGetController = require("../../Controller/OrdersController/OrderGetController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const OrderDeleteController = require("../../Controller/OrdersController/OrderDeleteController");
const AdminOrderGetController = require("../../Controller/OrdersController/AdminOrderGetController");
const OrderStatusChangesController = require("../../Controller/OrdersController/OrderStatusChangeController");
const OrderRouter = express.Router();

OrderRouter.get("/allmeals/:email", VerifyToken, OrderGetController);
OrderRouter.get("/all-users-order", VerifyToken, AdminOrderGetController);
OrderRouter.post("/create", VerifyToken, OrderPostController);
OrderRouter.patch(
  "/status/changes/:id",
  VerifyToken,
  OrderStatusChangesController
);
OrderRouter.delete("/delete/:id", VerifyToken, OrderDeleteController);
module.exports = OrderRouter;
