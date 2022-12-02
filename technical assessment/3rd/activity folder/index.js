const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {

    if(req.url === '/login'){  

        res.writeHead(200, {'Content-Type':'text/plain'});

        res.end('You are accessing the login page');

    };

}).listen(PORT, () => console.log(`Server running on port ${PORT}`));