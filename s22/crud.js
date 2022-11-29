const http = require("http");
const port = 4000;

// create a mock data
let directory = [

    {
        name: "Jann Dave Apohin",
        email: "jann@mail.com"

    },

    {
        name: "Ralph Ocba",
        email: "ralph@mail.com"
    }
];

http.createServer((request, response) => {

    // create an endpoint: "/users"
    // method: "GET"
    // response should return data from the mock data

    if(request.url == "/users" && request.method == "GET") {

        response.writeHead(200, {"Content-Type":"application/json"});

        response.write(JSON.stringify(directory));

        response.end();

    }

    // endpoint: "/users"
    // method: "POST"
    // response is to return the data that is being inserted in our mock data array
    // however, we must insert the data first in the mock array

    if(request.url == "/users" && request.method == "POST") {

        let requestBody = "";
        // this is where we will declare our inputs in the postman

        request.on("data", (data) => {

            requestBody += data;

        });

        request.on("end", () => {
            // parse requestBody to JS object so that we can insert it to the mock database

            requestBody = JSON.parse(requestBody);

            // we will insert object in our array of objects in our mock data
            directory.push(requestBody);

            // now that we successfully added our object into the array, we will now send a response back to the client
            response.writeHead(200, {"Content-Type":"application/json"});

            response.write(JSON.stringify(directory));

            response.end();

        });

    }

}).listen(port, () => console.log(`Server running at port ${port}`));

