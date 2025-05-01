require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const menuRoutes = require("./routes/menuRoutes");
const merchRoutes = require("./routes/merchRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/menu", menuRoutes);
app.use("/merch", merchRoutes);
app.use("/locations", locationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
