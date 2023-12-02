const { upcommingMeals } = require("../../Config/MongodbConfig");

const UpcommingGetController = async (req, res, next) => {
  try {
    const pipeline = [
      {
        $project: {
          document: "$$ROOT",
          likesCount: { $size: "$likes" },
        },
      },
      {
        $sort: { likesCount: -1 },
      },
      {
        $replaceRoot: { newRoot: "$document" },
      },
    ];
    const response = await upcommingMeals.aggregate(pipeline).toArray();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UpcommingGetController;
