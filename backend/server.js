console.log("Backend folder:", __dirname);
console.log(
  "Auth route exists:",
  require("fs").existsSync(__dirname + "/routes/auth.js")
);
console.log(
  "User route exists:",
  require("fs").existsSync(__dirname + "/routes/user.js")
);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ ONLY ONCE

const app = express();

/* =======================
   MIDDLEWARES
======================= */
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-login-app-zeta.vercel.app",
    ],
    credentials: true,
  })
);

/* =======================
   DATABASE
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.error("MongoDB Error ❌:", err));

/* =======================
   ROUTES
======================= */
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
