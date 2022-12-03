/*
    SYNTAX:
    db.collectionName.aggregate(pipeline, options)
    -collectionName - name of the collection
    -pipeline - array that contains aggregation steps
    -options - optional parameters for the aggregation
*/

db.fruits.insertMany(
    {
        "name": "Apple",
        "color": "Red",
        "stock": 20,
        "price": 40,
        "supplier_id": 1,
        "onSale": true,
        "origin": ["Philippines","US"]
    },
    {
        "name": "Banana",
        "color": "Yellow",
        "stock": 25,
        "price": 50,
        "supplier_id": 2,
        "onSale": true,
        "origin": ["Philippines","Ecuador"]
    },
    {
        "name": "Mango",
        "color": "Green",
        "stock": 25,
        "price": 12,
        "supplier_id": 1,
        "onSale": true,
        "origin": ["US", "China"]
    },
    {
        "name": "Dragon Fruit",
        "color": "Pink",
        "stock": 10,
        "price": 120,
        "supplier_id": 2,
        "onSale": true,
        "origin": ["Philippines","India"]
    }

);