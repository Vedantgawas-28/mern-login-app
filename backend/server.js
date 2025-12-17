console.log("Backend folder:", __dirname);
console.log("Auth route exists:", require("fs").existsSync(__dirname + "/routes/auth.js"));
console.log("User route exists:", require("fs").existsSync(__dirname + "/routes/user.js"));
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-login-app-zeta.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch(err => console.error("MongoDB Error ❌:", err));

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
