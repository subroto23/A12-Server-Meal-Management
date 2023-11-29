require("dotenv").config();

const PORT = process.env.PORT || process.env.SERVER_PORT;
const MONGODB_URL = process.env.MONGODB_URL_CONNECTIONS;

module.exports = { PORT, MONGODB_URL };
