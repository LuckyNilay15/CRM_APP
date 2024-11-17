const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Nilay_Namit:12345676@cluster0.kelk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
    process.exit(0); // Exit the script after a successful connection
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas:", err.message);
    process.exit(1); // Exit the script with an error
  });
