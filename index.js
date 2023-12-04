// const app = require("./src/App");
const express = require("express");
const app = express();
// const { mongodbConnection } = require("./src/Config/MongodbConfig");
// const { PortNumber } = require("./src/Secret");

const PortNumber = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("A12 Server is Running");
});

//Server Preview Check
app.listen(PortNumber, async () => {
  console.log(`Server is Running at http://localhost:${PortNumber}`);
  //Mongodb Connections
  // await mongodbConnection();
});
