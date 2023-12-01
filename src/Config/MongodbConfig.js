const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGODB_URL } = require("../Secret");

//Mongodb Client
const client = new MongoClient(MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//
const mongodbConnection = async () => {
  try {
    await client.connect();
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log("Mongodb Not Connected");
  }
};

//Database and Connection Name
const Users = client.db("meals").collection("users");
const allMeals = client.db("meals").collection("allmeals");
const upcommingMeals = client.db("meals").collection("upcomming");
const allReviews = client.db("meals").collection("reviews");

//Export MongoDb Collections
module.exports = {
  Users,
  mongodbConnection,
  upcommingMeals,
  allMeals,
  allReviews,
};
