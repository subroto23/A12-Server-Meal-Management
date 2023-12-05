const { ObjectId } = require("mongodb");
const { orders } = require("../../Config/MongodbConfig");

const OrderStatusChangesController = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const email = req?.query?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }

    const filter = { _id: new ObjectId(id) };
    const response = await orders.updateOne(filter, {
      $set: req.body,
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = OrderStatusChangesController;
