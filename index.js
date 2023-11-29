const app = require("./src/App");
const { mongodbConnection } = require("./src/Config/MongodbConfig");
const { PORT } = require("./src/Secret");

//Server Preview Check
app.listen(PORT, async () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  //Mongodb Connections
  await mongodbConnection();
});
