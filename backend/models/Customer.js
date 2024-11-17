//const mongoose = require("mongoose"); 
const { mongoose } = require("../config/db");
const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  total_spending: Number,
  visits: Number,
  last_visit: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
