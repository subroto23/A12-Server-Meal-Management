const { Users } = require("../../Config/MongodbConfig");

const UsersCatagoryPatch = async (req, res, next) => {
  try {
    const email = req?.query?.email;
    const filter = { email };
    const response = await Users.updateOne(filter, {
      $set: req.body,
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersCatagoryPatch;
