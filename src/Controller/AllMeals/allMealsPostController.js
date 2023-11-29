const { allMeals } = require("../../Config/MongodbConfig");

const allMealsPostController = async (req, res, next) => {
  try {
    const response = await allMeals.insertOne(req.body);
    return res.status(200).send(response);
    //
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = allMealsPostController;
