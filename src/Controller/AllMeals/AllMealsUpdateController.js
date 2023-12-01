const { ObjectId } = require("mongodb");
const { allMeals } = require("../../Config/MongodbConfig");

const AllMealsUpdateController = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const { title, type, Ingredients, details, price, rating } = req?.body;
    const filter = { _id: new ObjectId(id) };
    const query = {
      $set: { title, type, Ingredients, details, price, rating },
    };
    const options = { new: true };

    const response = await allMeals.findOneAndUpdate(filter, query, options);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllMealsUpdateController;
