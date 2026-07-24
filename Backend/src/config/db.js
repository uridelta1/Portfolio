const mongoose = require("mongoose");

const ConnectDB = async () => {
  console.log("MONGO_URI =", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = ConnectDB;