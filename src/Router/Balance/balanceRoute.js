const express = require("express");
const Balance = express.Router();
const balancePatchController = require("../../Controller/BalanceController/BalancePostController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const balanceGetController = require("../../Controller/BalanceController/balanceGetController");
//Route Create api/balance/create
Balance.get("/", balanceGetController);
Balance.post("/create", VerifyToken, balancePatchController);
//
module.exports = Balance;
