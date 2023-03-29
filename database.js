const mongoose = require("mongoose");

async function DatabaseConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected !!");
  } catch (error) {
    console.log("Database connection failed!");
  }
}

module.exports = DatabaseConnection;
