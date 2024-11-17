const mongoose = require("mongoose");

// Create a single connection for the unified database
const databaseConnection = mongoose.createConnection("mongodb://localhost:27017/crm_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listeners for the database
databaseConnection.on("connected", () => {
  console.log("Connected to MongoDB: crm_database successfully.");
});
databaseConnection.on("error", (err) => {
  console.error("Error connecting to crm_database:", err.message);
});

// Export the connection to use it in models
module.exports = {
  databaseConnection,
};
