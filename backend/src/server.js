const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const notesRoutes = require("./routes/notesRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Enable CORS so frontend (different port) can call backend
app.use(
  cors({
    origin: "http://localhost:5173", // your Vite frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use("/api/notes", notesRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
