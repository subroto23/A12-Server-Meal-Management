const { ObjectId } = require("mongodb");
const { allMeals } = require("../../Config/MongodbConfig");

const AllMealsDeleteController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const response = await allMeals.deleteOne(filter);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllMealsDeleteController;
