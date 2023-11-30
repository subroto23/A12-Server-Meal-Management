const { Users } = require("../../Config/MongodbConfig");

const UsersGetController = async (req, res, next) => {
  try {
    const result = await Users.find().toArray();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersGetController;
