const express = require("express");
const MerchItem = require("../models/MerchItem");

const router = express.Router();

router.post("/merch", async (req, res) => {
  try {
    const newItem = new MerchItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error creating merch item:", err);
    res.status(500).json({ message: "Error creating merch item" });
  }
});

router.get("/merch", async (req, res) => {
  try {
    const items = await MerchItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching merch items:", err);
    res.status(500).json({ message: "Error fetching merch items" });
  }
});

router.put("/merch/:id", async (req, res) => {
  try {
    const updatedItem = await MerchItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ message: "Merch item not found" });
    res.status(200).json(updatedItem);
  } catch (err) {
    console.error("Error updating merch item:", err);
    res.status(500).json({ message: "Error updating merch item" });
  }
});

router.delete("/merch/:id", async (req, res) => {
  try {
    const deletedItem = await MerchItem.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ message: "Merch item not found" });
    res.status(200).json({ message: "Merch item deleted successfully" });
  } catch (err) {
    console.error("Error deleting merch item:", err);
    res.status(500).json({ message: "Error deleting merch item" });
  }
});

module.exports = router;
