// Import the built-in http module from Node.js
const http = require('http');

// Define the hostname and port for your server
const hostname = '127.0.0.1';
const port = 3000;

// Create the server using the createServer method of the http object
// This method takes a function as an argument, which is called every time a request is made to your server
// The function takes two arguments: req (the request object) and res (the response object)
// In this case, the server always responds with a status code of 200 and the text "Hello World!"
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

// Start the server with the listen method, passing in the port and hostname
// This method also takes a callback function that is called when the server is ready
// In this case, it logs a message to the console
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});