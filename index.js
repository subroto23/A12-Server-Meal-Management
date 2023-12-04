const app = require("./src/App");
const { mongodbConnection } = require("./src/Config/MongodbConfig");
const { PORT } = require("./src/Secret");

app.get("/", (req, res) => {
  res.send("A12 Server Running");
});

//Server Preview Check
app.listen(PORT, async () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  //Mongodb Connections
  await mongodbConnection();
});
