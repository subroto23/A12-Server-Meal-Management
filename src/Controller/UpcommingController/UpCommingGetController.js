const { upcommingMeals } = require("../../Config/MongodbConfig");

const UpcommingGetController = async (req, res, next) => {
  try {
    const response = await upcommingMeals.find().toArray();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UpcommingGetController;
