const { balanceDb } = require("../../Config/MongodbConfig");

const balancePatchController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const result = await balanceDb.insertOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = balancePatchController;
