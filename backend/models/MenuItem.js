const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  arName: String,
  enName: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
