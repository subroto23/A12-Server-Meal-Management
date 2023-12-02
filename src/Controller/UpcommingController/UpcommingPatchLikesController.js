const { ObjectId } = require("mongodb");
const { upcommingMeals } = require("../../Config/MongodbConfig");

const UpcommingPatchLikesController = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const ItemsId = req.query.id;
    const filter = await upcommingMeals.findOne(new ObjectId(ItemsId));
    const updated = {
      $addToSet: { likes: email },
    };
    const response = await upcommingMeals.updateOne(filter, updated);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UpcommingPatchLikesController;
