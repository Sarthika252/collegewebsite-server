// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/collegewebsite', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch((err) => console.error(err));

// app.use('/api/auth', authRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//import dotenv from "dotenv";
//const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
//const authRoutes = require('./routes/authRoutes');

//const app = express();
//app.use(cors());
//app.use(express.json());
//dotenv.config();

//mongoose.connect(process.env.MONGO_URI)
 // .then(() => console.log("✅ MongoDB connected successfully"))
  //.catch((err) => console.error("❌ MongoDB connection error:", err));

// mongoose.connect('mongodb://localhost:27017/collegewebsite', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

//app.use('/api/auth', authRoutes);

//app.listen(5000, () => console.log('Server running on port 5000'));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // note the .js extension

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


