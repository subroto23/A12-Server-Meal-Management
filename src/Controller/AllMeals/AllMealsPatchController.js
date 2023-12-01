const { ObjectId } = require("mongodb");
const { allMeals } = require("../../Config/MongodbConfig");

const AllMealsPatchController = async (req, res, next) => {
  try {
    const ItensId = req.query.id;
    const filter = await allMeals.findOne(new ObjectId(ItensId));
    const updated = { $set: req.body };
    const response = await allMeals.updateOne(filter, updated);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllMealsPatchController;
