const express = require("express");

const app = express();

const PORT = 4000;

// *MIDDLEWARE
app.use(express.json());

app.use(express.urlencoded({extended:true}));


// *ROUTES
app.get("/home", (req, res) => res.send("Welcome Home, Baby!"));

const users = [
    {
        name: "Dahl",
        id: 123
    },

    {
        name: "Jem",
        id: 456
    },

    {
        name: "Jelly",
        id: 789
    }
];

app.get("/users", (req, res) => {

    users.forEach( (user) => {
        
        res.send(users);

    });
    

});


app.delete("/delete-user", (req, res) => {

    for (let i = 0; i < users.length; i++){

        if(req.body.name === users[i].name){

            users.splice(users[i], 0);

            res.send(`User ${users[i].name} is removed from the database`);
            
            console.log(users.filter(user => user.name !== req.body.name));

        };

    }

    

});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
