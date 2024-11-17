const app = require("./app"); // Ensure you have the app configured
const { connectDB } = require("./config/db");
//require("dotenv").config({ path: "./.env" });

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err.message);
    process.exit(1); // Exit the process on failure
  }
};

startServer();
