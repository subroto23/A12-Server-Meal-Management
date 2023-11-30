const { allMeals } = require("../../Config/MongodbConfig");

const allMealsGetController = async (req, res, next) => {
  try {
    const meals = await allMeals.find().toArray();
    return res.status(200).send(meals);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = allMealsGetController;
