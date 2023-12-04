const express = require("express");
const PaymentPostController = require("../../Controller/PaymentController/PaymentPostController");
const PaymentRouteStripe = express.Router();

//Route Create
PaymentRouteStripe.post("/create", PaymentPostController);

//
module.exports = PaymentRouteStripe;
