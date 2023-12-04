const { ObjectId } = require("mongodb");
const { orders, allMeals } = require("../../Config/MongodbConfig");

const OrderGetController = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const filter = { email };
    const allOrders = await orders.find(filter).toArray();
    const OrderIds = allOrders.map((data) => new ObjectId(data.itemsId));
    const response = await allMeals.find({ _id: { $in: OrderIds } }).toArray();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = OrderGetController;
