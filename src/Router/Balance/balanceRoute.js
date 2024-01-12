const express = require("express");
const Balance = express.Router();
const balancePatchController = require("../../Controller/BalanceController/BalancePostController");
const VerifyToken = require("../../../Middleware/VerifyToken");
const VerifyAdmin = require("../../../Middleware/VerifyAdmin");
const balanceGetController = require("../../Controller/BalanceController/balanceGetController");
//Route Create api/balance/create
Balance.get("/", balanceGetController);
Balance.post("/create", VerifyToken, VerifyAdmin, balancePatchController);
//
module.exports = Balance;
