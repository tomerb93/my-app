const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB connected..");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// @user info for MainCluster
// username: admin
// password4: @UPctJgkHLq3U7
