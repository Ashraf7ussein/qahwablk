const mongoose = require("mongoose");

const locationItemSchema = new mongoose.Schema({
  arName: String,
  enName: String,
  location: String,
});

module.exports = mongoose.model("LocationItem", locationItemSchema);
