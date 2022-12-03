// * CRUD OPERATIONS //

// * Create
    // insertOne() - insert one document at a time
    // insertMany()

/*
    SYNTAX: insertOne()

    db.collectionName.insertOne({object});
    /db is default; insertOne is built in method

    /Javascript Comparison
    object.objectName.method({object});

*/

db.users.insertOne(

    {

        "firstName":"Jane",

        "lastName":"Doe",

        "age": 21,

        "contact": {

            "phone": "87654321",
            "email":"janedoe@mail.com",

        },

        "courses": ["CSS", "Javascript", "PHP"]
        
    }

);

/*
    SYNTAX: insertMany()

    db.collectionName.insertMany([{objectA}, {objectB}]);

*/

db.users.insertMany([

    {

        "firstName":"Jane",

        "lastName":"Doe",

        "age": 21,

        "contact": {

            "phone": "87654321",
            "email":"janedoe@mail.com",

        },

        "courses": ["CSS", "Javascript", "PHP"],

        "department": "HR"
        
    },

    {
        "firstName":"Stephen",

        "lastName":"Hawking",

        "age": 76,

        "contact": {

            "phone": "87654321",
            "email":"stephenhawking@mail.com",

        },

        "courses": ["Python", "React", "PHP"],

        "department": "HR"

    },

    {

        "firstName":"Neil",

        "lastName":"Armstrong",

        "age": 82,

        "contact": {

            "phone": "87654321",
            "email":"neilarmstrong@mail.com",

        },

        "courses": ["React", "Laravel", "SaSS"],

        "department": "HR"

    }

]);

// * READ

/*
    SYNTAX:
    db.collectionName.find();
        query, projection
    db.collectionName.find({field:value});

*/

db.users.find();
// returns all documents


// using single query
// returns document that passes the query/filter
db.users.find({"firstName":"Stephen"});


// using multiple query parameters
// depends on key value pairs declared or inserted inside the collection 

/*
    SYNTAX:
    db.collectionName.find({fieldA:valueA, fieldB:valueB})

*/

db.users.find({

    "lastName":"Armstrong",
    "age": 82

});


// * UPDATE

/*
    SYNTAX:
    db.collectionName.updateOne(

        {criteria},
        {$set:
            {field:value}
        }
    );
    
    db.collectionName.updateMany();


*/

db.users.insertOne({

        "firstName": "Test",
        "lastName": "Test",
        "age": 0,
        "contact": {
            "phone":"0000000",
            "email":"test@mail.com"
        },
        "courses": [],
        "department": "none"
    
});

// update a document
db.users.updateOne(

    {
        "firstName":"Test"
    },
    {
        $set: {
            "firstName":"Bill",
            "lastName":"Gates",
            "age": 65,
            "contact":{
                "phone":"123456789",
                "email":"bill@mail.com"
            },
            "courses": ["PHP", "Laravel", "HTML"],
            "department": "Operations",
            "status": "active"
        }
    }
);

// Exercise 1
db.users.updateOne(

    {
        "firstName":"Test"
    },
    {
        $set: {
            "firstName":"Bill",
            "lastName":"Gates",
            "age": 65,
            "contact":{
                "phone":"123456789",
                "email":"bill@mail.com"
            },
            "courses": ["PHP", "Laravel", "HTML"],
            "department": "Operations",
            "status": "active"
        }
    }
);

// Exercise 1
db.users.updateOne({"firstName":"Jane"}, {$set: {"department":"none"}});

// update multiple documents at once

/*
    SYNTAX:
    db.collectionName.updateMany(

        {criteria},
        {
        $set:
        {field:value}
        };
    )

*/

db.users.updateMany(
    {
        "department": "none"
    },
    {
        $set: {
            "department": "HR"
        }
    }
);

db.users.insertOne(
    {
        "firstName":"Test",
        "lastName":"Test",
        "age": 0,
        "contact": {
            "phone":"0000000",
            "email":"test@mail.com"
        },
        "courses":[],
        "department": "none"
    }
);

db.users.replaceOne(
    {
        "firstName":"Test"
    },
    
    {
        "firstName":"Billy",
        "lastName":"Crawford",
        "age": 35,
        "contact": {
            "phone":"123456789",
            "email":"billycrawford@mail.com"
        },
        "courses":["React", "Node", "Express"],
        "department": "Finance"
    }
);



// Exercise 2
// update status field of Bill Gates, you will use the keyword $unset
// clue updateOne

db.users.updateOne(
    
    {
        "firstName":"Bill"
    },

     {
        $unset: 

        {
            "status":"active"
        }

    });

// * DELETE
    // deleteOne()
    // deleteMany()

    
/*
    SYNTAX:
    db.collectionName.deleteOne(
        {criteria}
    )

*/

db.users.insertOne(
    {
        "firstName":"Test",
        "lastName":"Test",
        "age": 0,
        "contact": {
                        "phone":"0000000",
                        "email":"test@mail.com"
                    },
        "courses":[],
        "department": "none"
    }
);

db.users.deleteOne(

    {
        "firstName":"Test"
    }

);

db.users.deleteMany(
    {
        "department":"HR"
    }
);


// Advance Queries
    // Retrieving data with complex data structures is also a good skill for any developer to have
    // real world examples of data can be as complex as having two or more layers of nested objects and arrays
    // Learning to query these kind of datas are also essential to ensure that we are able to retrieve any information that we would need in our application

// Exercise 3
// Retrieve documents that has phone number "87654321"
// query on nested fields

db.users.find(

    {
        "contact.phone":"87654321"
    }
        
);

// Query an array with exact elements
// CSS, Javascript, PHP
db.users.find(

    {
        "courses":["CSS", "Javascript", "PHP"]
    }

);

// Query an embedded document
db.users.find(

    {
        contact: {

            "phone":"87654321",
            "email":"stephenhawking@mail.com"
        }
    }
);

// Querying an array without regard to order
// React, Python
// $all

db.users.find(

    {
        courses: {

            $all: ["React", "Python"]
        }
    }
);