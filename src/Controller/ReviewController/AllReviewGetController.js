const { ObjectId } = require("mongodb");
const { allReviews } = require("../../Config/MongodbConfig");

const AllReviewGetController = async (req, res, next) => {
  try {
    const id = req.query.id;
    const filter = {
      mealId: id,
    };
    const response = await allReviews.find(filter).toArray();
    return res.status(200).send(response.reverse());
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllReviewGetController;
