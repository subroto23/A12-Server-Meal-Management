require("dotenv").config();

const PORT = process.env.PORT || process.env.SERVER_PORT;
const MONGODB_URL = process.env.MONGODB_URL_CONNECTIONS;

const ACCESS_TOKEN_KEY_VALUE = process.env.ACCESS_TOKEN_KEY;

module.exports = { PORT, MONGODB_URL, ACCESS_TOKEN_KEY_VALUE };
