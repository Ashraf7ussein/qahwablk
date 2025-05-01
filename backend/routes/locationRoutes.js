const express = require("express");
const LocationItem = require("../models/LocationItem");

const router = express.Router();

router.post("/locations", async (req, res) => {
  try {
    const newItem = new LocationItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error creating location item:", err);
    res.status(500).json({ message: "Error creating location item" });
  }
});

router.get("/locations", async (req, res) => {
  try {
    const items = await LocationItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching location items:", err);
    res.status(500).json({ message: "Error fetching location items" });
  }
});

router.put("/locations/:id", async (req, res) => {
  try {
    const updatedItem = await LocationItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ message: "Location item not found" });
    res.status(200).json(updatedItem);
  } catch (err) {
    console.error("Error updating location item:", err);
    res.status(500).json({ message: "Error updating location item" });
  }
});

router.delete("/locations/:id", async (req, res) => {
  try {
    const deletedItem = await LocationItem.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ message: "Location item not found" });
    res.status(200).json({ message: "Location item deleted successfully" });
  } catch (err) {
    console.error("Error deleting location item:", err);
    res.status(500).json({ message: "Error deleting location item" });
  }
});

module.exports = router;
