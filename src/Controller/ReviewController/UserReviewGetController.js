const { ObjectId } = require("mongodb");
const { allReviews, allMeals } = require("../../Config/MongodbConfig");

const UserReviesController = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const filter = { email };
    const Reviews = await allReviews.find(filter).toArray();
    const mealsReview = Reviews.map((data) => new ObjectId(data.mealId));
    const response = await allMeals
      .find({ _id: { $in: mealsReview } })
      .toArray();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UserReviesController;
