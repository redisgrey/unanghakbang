// * READ OPERATION
// Query Operators

// Comparison Operators
// greater than
db.users.find(
    {
        age: {$gt:50}
    }
);

// greater than or equal to
db.users.find(
    {
        "age": {$gte:50}
    }
);

// equal to
db.users.find(
    {
        age: 65
    }
);

// less than
db.users.find(
    {
        age: {$lt:65}
    }
);

// less than or equal to
db.users.find(
    {
        age: {$lte:65}
    }
);

// not equal
db.users.find(
    {
        age: {$ne:65}
    }
);

// using in keyword
db.users.find(
    {
        "lastName": {
            $in: ["Hawking", "Doe"]
        }
    }
);

// Exercise 4
// Search courses with HTML and React
db.users.find(
    {
        "courses": {
            $in: ["HTML", "React"]
        }
    }
);

// Logical Operators
// $or - atleast one is true within the criterias given
db.users.find(
    {
        $or: [
            {"firstName": "Neil"}
        ]
    }
);

// How about if we add another criteria
db.users.find(
    {
        $or: [
            {"firstName": "Neil"},
            {"age": 25},
            {"age":{$gte: 50}}
        ]
    }

);

// $and
// age not equal to 82 and 76
// phone number is 123456789

db.users.find(
    {
        $and: [
            {"age": {$ne:82}},

            {"age": {$ne:76}},

            {"contact.phone": "123456789"}
        ]
    }
);

// it will stil work without $and
db.users.find(
    {
        
        "age": {$ne:82},

        "age": {$ne:76},

        "contact.phone": "123456789"
        
    }
);

// Field Projection

// inclusion
db.users.find(
    {
        "firstName":"Jane",
    },
    {
        "firstName": 1, _id:0
    }
);

// find document of Jane and return only the fields firstName, lastName, phoneNumber

db.users.find(
    {
        "firstName":"Bill"
    },
    {
        _id: 0, 
        "firstName":1, 
        "lastName":1,
        "contact.phone":1
    }
);


// Query Operator
    // regex
db.users.find(
    {
        "firstName":{$regex: "N", $options: "1"}
    }
);

// Exercise 5
// Find users with letter "S" in their firstname and letter "D" in their lastname 
// This is not case sensitive
// Show only the first and last name and hide the id field

db.users.find(
    {
                  
        $or: [
            {
                "firstName":{$regex: "S", $options: "i"}
            }, 
                
            {
                "lastName":{$regex: "D", $options: "i"}
            }
        ]
    },

    {
        _id: 0, 
        "firstName":1, 
        "lastName":1,
    }

);



