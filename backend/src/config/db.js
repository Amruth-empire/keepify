const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Mongodb is connected successfully!..");
    });
  } catch (error) {
    console.error(error);
    process.exit(1) //exit with failure
  }
};

module.exports = connectDB;
