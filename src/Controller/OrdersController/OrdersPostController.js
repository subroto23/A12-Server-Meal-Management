const { orders } = require("../../Config/MongodbConfig");

const OrderPostController = async (req, res, next) => {
  try {
    if (req?.query?.email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const orderValue = req.body;
    const response = await orders.insertOne(orderValue);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = OrderPostController;
