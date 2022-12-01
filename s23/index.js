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

app.get("/", (req, res) => res.send("Annyeong!"));


/*
Exercise:
Create a route with the following details:
- endpoint is /hello
- method is get
- response: Hello from the /hello endpoint
*/
app.get("/hello", (req, res) => res.send("Hello from the /hello endpoint"));


app.post("/greeting", (req, res) => {

    console.log(req.body);
    res.send(`Hello there ${req.body.name}!`);

});


app.listen(port, () => console.log(`Server is running at port ${port}`));