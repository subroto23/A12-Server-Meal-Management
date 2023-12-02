const { Users } = require("../../Config/MongodbConfig");

const UsersGetAdminController = async (req, res, next) => {
  try {
    const email = req.params.email;
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
    const query = { email };
    const result = await Users.findOne(query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersGetAdminController;
