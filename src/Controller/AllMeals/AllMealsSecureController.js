const { allMeals } = require("../../Config/MongodbConfig");

const AllMealsSecureController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    const page = parseInt(req?.query?.page);
    const size = parseInt(req?.query?.limit);

    const skipValue = size * page;
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

    const datas = await allMeals
      .aggregate(pipeline)
      .skip(skipValue)
      .limit(size)
      .toArray();
    const totalCount = await allMeals.count();
    return res.status(200).send({ datas, totalCount, skipValue });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = AllMealsSecureController;
