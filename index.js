const app = require("./src/App");
const { mongodbConnection } = require("./src/Config/MongodbConfig");
const { PortNumber } = require("./src/Secret");

app.get("/", (req, res) => {
  res.send("A12 Server is Running");
});

//Server Preview Check
app.listen(PortNumber, async () => {
  console.log(`Server is Running at http://localhost:${PortNumber}`);
  //Mongodb Connections
  await mongodbConnection();
});
