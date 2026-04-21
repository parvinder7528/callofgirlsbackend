// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require("path")
// const app = express();

// const PORT = process.env.PORT;
// const MONGO_URI = process.env.MONGO_URI ;

// // Middleware
// console.log(MONGO_URI)
// app.use(cors("*"));
// app.use(express.json());

// mongoose.connect(MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB connection error:', err));
// app.get('/', (req, res) => {
//   res.json({ message: 'HotelBooking API - JWT Auth Ready' });
// });
// app.use(express.static(path.join(__dirname, "dist/client")));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/api',require("./routes/mainRoutes"));
// require('./crons/adsrun.cron');
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =require("path")
const mainRoutes =require("./routes/mainRoutes.js")

const app = express();

// ✅ Body parser
app.use(express.json());

// ✅ MongoDB (connect only once)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB error:", err);
    throw err;
  }
};
app.use(cors({
  origin: ["https://callofgirls-frontend.vercel.app"],
  credentials: true
}))
app.use(express.static(path.join(__dirname, "dist")));

// ✅ YOUR HEADER + DB MIDDLEWARE (FIXED)
app.use(async (req, res, next) => {
  // 🌍 Allow all origins
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  // Headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // ✅ Handle preflight
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  try {
    await connectDB(); // connect once
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});



app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// ✅ Test route
// app.get("/", (req, res) => {
//   res.json({ message: "API is working 🚀" });
// });

// ✅ Static (optional)

// ✅ Routes
app.use("/api", mainRoutes);

// ❌ DO NOT use app.listen()

module.exports=app