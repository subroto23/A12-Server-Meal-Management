const { Users } = require("../../Config/MongodbConfig");

const UsersPatchController = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    const name = req?.query.name;
    const filter = { email, name };
    const response = await Users.updateOne(filter, {
      $set: { role: "admin" },
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersPatchController;
