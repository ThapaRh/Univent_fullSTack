//jshint esversion:6
const express = require("express");
// const bodyParser = require("body-parser");
// const https = require("https");

const app = express();

app.get("/", function (req, res) {});

app.listen(3000, () => {
  console.log("Server Started on port 3000.");
});

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://FieldOfHonor1:Cookie1234@cluster0.7cfzpvb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("employees");
    const records = database.collection("records");
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "Bob Ross" };
    const employee = await records.findOne(query);
    console.log(employee);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
