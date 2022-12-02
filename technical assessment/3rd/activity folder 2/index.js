const http = require('http');

const PORT = 4000;

http.createServer((req, res) => {

    if(req.url === '/'){  

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Welcome to Booking System!');

    } else if (req.url === '/profile'){

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Welcome to my Profile!');

    } else if (req.url === '/courses'){

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Here are our available courses!');

    } else if(req.url === '/add-course'){

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Add a course to our resources');

    } else if(req.url === '/updatecourse'){

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Update a course to our resources');

    } else if(req.url === '/archivecourses'){

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('Archive courses to our resources');

    };

}).listen(PORT, () => console.log(`Server running on port ${PORT}`));