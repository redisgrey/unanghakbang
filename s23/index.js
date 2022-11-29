const express = require("express");
const app = express();
const port = 4000;

// ** Create the middleware
app.use(express.json());
// it allows the server to handle data from the request
// it parses incoming request with JSON payload and is based on body parses

app.use(express.urlencoded({extended:true}));
// allows the server to handle data from request coming from forms and tables
// it parses incoming request with JSON payload and is based on body parses

//** Establish routes
// server.method("endpoint", () => {

// });

app.get("/", (request, response) => response.send("Annyeong!"));