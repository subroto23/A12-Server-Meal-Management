const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_KEY_VALUE } = require("../../Secret");

const UsersPostController = (req, res, next) => {
  try {
    const users = req.body;
    const token = jwt.sign(users, ACCESS_TOKEN_KEY_VALUE, { expiresIn: "24h" });
    if (token) {
      res.status(200).send({ token });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = UsersPostController;
