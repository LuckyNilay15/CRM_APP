// const mongoose = require("mongoose");
// require("dotenv").config();

// // const mongoURI ='mongodb+srv://okbhr209:Tech%401234@cluster0.wg4c8ia.mongodb.net/ecommerce'// Fetch the URI from .env file

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(mongoURI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log("MongoDB Connected successfully!");
// //   } catch (err) {
// //     console.error("MongoDB Connection Failed:", err.message);
// //     process.exit(1); // Exit the process with failure
// //   }
// // };

// // module.exports = { connectDB, mongoose };

// // const mongoose = require("mongoose");
// // //require("../.env").config();

// // const mongoURI = 'mongodb+srv://Nilay_Namit:12345676@cluster0.kelk2.mongodb.net/' ;

// // const connectDB = async () => {
// //   try {
// //     // Connect to MongoDB without deprecated options
// //     await mongoose.connect(mongoURI);
// //     console.log("MongoDB Connected successfully!");
// //   } catch (err) {
// //     console.error("MongoDB Connection Failed:", err.message);
// //     process.exit(1); // Exit the process with failure
// //   }
// // };

// // module.exports = { connectDB, mongoose };

// const mongoose = require('mongoose');

// // MongoDB Atlas connection string
// const mongoURI = "mongodb+srv://nilaynamit15:HENxltFQsP37FgPA@cluster0.yt8zo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Connect to MongoDB
// const connectDB = async () => {
//     try {
//       await mongoose.connect(mongoURI, {
//         u
//       });
//       console.log("MongoDB Connected successfully!");
//     } catch (err) {
//       console.error("MongoDB Connection Failed:", err.message);
//       process.exit(1); // Exit the process with failure
//     }
//   };
  
//   module.exports = { connectDB, mongoose };


const mongoose = require("mongoose");
const dotenv =require('dotenv');
dotenv.config();
const connectionString = process.env.DB_STRING;const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports = { connectDB, mongoose };