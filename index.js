require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path")
const fileUpload =require("express-fileupload")
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI ;

// Middleware
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
app.get('/', (req, res) => {
  res.json({ message: 'HotelBooking API - JWT Auth Ready' });
});
app.use(express.static(path.join(__dirname, "dist/client")));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',require("./routes/mainRoutes"));
require('./crons/adsrun.cron');
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require("path");
// const mainRoutes = require("./routes/mainRoutes.js");
// require("dotenv").config()
// const app = express();

// // ✅ Middleware
// app.use(express.json());

// app.use(cors({
//   origin: "https://calllgirls-frontend.vercel.app",
//   credentials: true
// }));

// // ✅ MongoDB connect ONCE
// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;
// // console.log(process.env.MONGO_URI)
//   await mongoose.connect(process.env.MONGO_URI);
//   isConnected = true;
//   console.log("✅ MongoDB connected");
// };

// connectDB();

// // ✅ Routes
// app.use("/api", mainRoutes);

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.json({ message: "API working 🚀" });
// });

// // ❌ No app.listen
// module.exports = app;