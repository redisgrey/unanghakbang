const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

const cors = require("cors");
// CORS - cross origin resource sharing
// It is for browser security features that restricts cross origin http request with other servers and specifies which domain access your resources

// import routes module
const courseRoutes = require("./routes/courseRoutes");

const userRoutes = require("./routes/userRoutes");

// mongoDB connection and notification
mongoose.connect("mongodb+srv://gdtamares:891998Secret@cluster0.wvhnjdl.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("Connected to the database"));

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use(cors());

// Routes
app.use("/api/users", userRoutes);

app.use("/api/courses", courseRoutes);

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
