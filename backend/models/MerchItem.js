const mongoose = require("mongoose");

const merchItemSchema = new mongoose.Schema({
  arName: String,
  enName: String,
  price: Number,
});

module.exports = mongoose.model("MerchItem", merchItemSchema);
