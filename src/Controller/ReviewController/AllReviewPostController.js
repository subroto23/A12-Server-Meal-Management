const { allReviews } = require("../../Config/MongodbConfig");

const AllReviewPostController = async (req, res, next) => {
  try {
    if (req?.query?.email !== req.decoded.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const reviewsData = req.body;
    const response = await allReviews.insertOne(reviewsData);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllReviewPostController;
