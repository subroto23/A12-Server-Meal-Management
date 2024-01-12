const { balanceDb, orders } = require("../../Config/MongodbConfig");

const balanceGetController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    const totalOrders = await orders.find({ email: email }).toArray();
    const totalOrdersPrice = totalOrders.reduce(
      (sum, items) => sum + Number(items.price),
      0
    );
    const totalPaymentDatas = await balanceDb.find({ email: email }).toArray();
    const totalPaymentValue = totalPaymentDatas.reduce(
      (sum, items) => sum + Number(items.taka),
      0
    );
    let presentBalance = totalPaymentValue - totalOrdersPrice;
    if (presentBalance < 0) {
      return (presentBalance = 0);
    }
    res.status(200).send({ netCash: presentBalance });
  } catch (error) {
    console.log(error);
  }
};
module.exports = balanceGetController;
