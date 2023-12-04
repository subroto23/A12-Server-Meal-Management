const { allReviews } = require("../../Config/MongodbConfig");

const UserReviewDeleteController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const id = req?.params.id;
    const filter = { mealId: id };
    const response = await allReviews.deleteOne(filter);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = UserReviewDeleteController;
