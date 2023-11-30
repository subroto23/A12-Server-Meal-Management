const { upcommingMeals } = require("../../Config/MongodbConfig");

const UpcommingPostController = async (req, res, next) => {
  try {
    const response = await upcommingMeals.insertOne(req.body);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = UpcommingPostController;
