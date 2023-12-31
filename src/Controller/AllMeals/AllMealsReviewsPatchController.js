const { ObjectId } = require("mongodb");
const { allMeals } = require("../../Config/MongodbConfig");

const AllMealsReviewsPatchController = async (req, res, next) => {
  try {
    if (req?.query?.email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const ItensId = req.query.id;
    const filter = await allMeals.findOne(new ObjectId(ItensId));
    const updated = { $set: req.body };
    const response = await allMeals.updateOne(filter, updated);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllMealsReviewsPatchController;
