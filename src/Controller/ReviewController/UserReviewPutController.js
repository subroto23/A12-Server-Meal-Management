const { ObjectId } = require("mongodb");
const { allReviews } = require("../../Config/MongodbConfig");

const UserReviewPutController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const id = req?.params?.id;
    const filter = { mealId: id, email };
    const query = {
      $set: req.body,
    };
    const options = { new: true };

    const response = await allReviews.findOneAndUpdate(filter, query, options);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UserReviewPutController;
