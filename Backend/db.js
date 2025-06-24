const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// ✅ Fix: match the exact variable name from your .env
const mongoURL = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB using mongoose");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;
