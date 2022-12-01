const express = require("express");
const app = express();
const port = 4000;


// ** Create the middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// * ROUTES
    // endpoints
    // request listener
    // http methods

app.get("/", (req, res) => res.send("Welcome to my homepage"));

app.post("/login", (req, res) => {

    let name = req.body.name;

    res.send(`${name} successfully logged in!`);

});

const usersDatabase = [];

app.post("/signup", (req, res) => {


    let username = req.body.username;
    let password = req.body.password;

    if(username === "" || password === ""){

        res.send("Please fill out the complete information!");
        

    } else {

        usersDatabase.push({ username:req.body.username, password:req.body.password });

        res.send(`User ${username} successfully registered!`);

    }

    console.log(usersDatabase);
});

// * UPDATE PASSWORD - put method

app.put("/change-password", (req, res) => {

    let message = "";

    for (let i = 0; i < usersDatabase.length; i++){

        if(req.body.username === usersDatabase[i].username){

            usersDatabase[i].password = req.body.password;

            message = `User ${req.body.username}'s password has been updated`;

        } else {

            message = "User doesn't exist";
        }

        console.log(usersDatabase);

        res.send(message);
        
    }
});

app.listen(port, () => console.log(`Server is running at port ${port}`));