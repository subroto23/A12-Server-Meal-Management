const { Users } = require("../../Config/MongodbConfig");

const UsersGetController = async (req, res, next) => {
  try {
    const page = parseInt(req?.query?.page);
    const size = parseInt(req?.query?.limit);
    const skipValue = size * page;
    const datas = await Users.find().skip(skipValue).limit(size).toArray();
    const totalCount = await Users.count();
    return res.status(200).send({ datas, totalCount, skipValue });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersGetController;
