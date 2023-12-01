const { ObjectId } = require("mongodb");
const { upcommingMeals } = require("../../Config/MongodbConfig");

const UpcommingPatchLikesController = async (req, res, next) => {
  try {
    if (req?.query?.email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const ItemsId = req.query.id;
    const filter = await upcommingMeals.findOne(new ObjectId(ItemsId));
    const updated = { $set: req.body };
    const response = await upcommingMeals.updateOne(filter, updated);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UpcommingPatchLikesController;
