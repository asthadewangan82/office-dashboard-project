const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://admin:Admin%40123@officedb.yeovnmr.mongodb.net/officeDB?retryWrites=true&w=majority&appName=officeDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Task Dashboard Backend Running Successfully");
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
