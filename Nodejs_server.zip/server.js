const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello, this is a basic Node.js HTTP server!\n');
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
