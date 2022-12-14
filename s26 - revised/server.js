const express = require("express");

const mongoose = require("mongoose");

const app = express();

const dotenv = require("dotenv").config();

const cors = require("cors");

const PORT = process.env.PORT || 5000;

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI);

mongoose.set('strictQuery', 'true'); 

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("Connected to the database"));


// MIDDLEWARE
app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/courses", require("./routes/courseRoutes"));

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
