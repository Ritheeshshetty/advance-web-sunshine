const mongoose = require("mongoose");

// const mongoURI = "mongodb://127.0.0.1:27017/sunshine";
const mongoURI =
  process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/sunshine";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected!"));
};

module.exports = connectToMongo;
