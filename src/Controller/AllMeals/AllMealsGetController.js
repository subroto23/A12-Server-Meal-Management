const { allMeals } = require("../../Config/MongodbConfig");

const allMealsGetController = async (req, res, next) => {
  try {
    const pipeline = [
      {
        $addFields: {
          likes: { $size: "$likes" },
          reviews: { $sum: "$reviews" },
        },
      },
      {
        $addFields: {
          totalCount: { $add: ["$likes", "$reviews"] },
        },
      },
      {
        $sort: { totalCount: -1 },
      },
    ];
    const meals = await allMeals.aggregate(pipeline).toArray();
    return res.status(200).send(meals);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = allMealsGetController;
