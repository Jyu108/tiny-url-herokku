const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.DB_URI;

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://jyu108:oose@cluster0.gu0a7.mongodb.net/Cluster0?retryWrites=true&w=majority");
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };