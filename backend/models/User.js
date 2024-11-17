//const mongoose = require("mongoose");
const { mongoose } = require("../config/db");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
