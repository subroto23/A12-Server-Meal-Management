const { Users } = require("../../Config/MongodbConfig");

const UserPostCreateController = async (req, res, next) => {
  try {
    const reqUser = req.body;
    const DatabaseUser = await Users.findOne({
      email: reqUser.email,
    });
    //Inserted User
    if (!DatabaseUser) {
      const response = await Users.insertOne(reqUser);
      return res.status(200).send(response);
    }
    return;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UserPostCreateController;
