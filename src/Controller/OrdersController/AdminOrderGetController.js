const { orders } = require("../../Config/MongodbConfig");

const AdminOrderGetController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const response = await orders.find().toArray();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AdminOrderGetController;
