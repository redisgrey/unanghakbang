//Exercise:
/*
Use the existing code discussion.
Create an endpoint called “/profile”.
Use HTTP method “POST”.
Create a response with a statement “Data to be send to the database”
For the endpoint doesn’t exist, send a response “Request Cannot Be Completed”.
Ensure that the endpoint is running on PostMan.
*/

const http = require ('http');

const port = 4000;

http.createServer( (request, response) => {

    if (request.url == '/profile' && request.method == 'POST') {

        response.writeHead(200, {'Content-Type': 'text/plain'});

        response.end('Data to be send to the database');

    } else {

        response.writeHead(400, {'Content-Type': 'text/plain'});

        response.end('Request Cannot Be Completed');

    }

    
}).listen(port);

console.log(`Server is connected at localhost: ${port}`);

// http://localhost:4000/