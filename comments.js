// Create web server
const http = require('http');

const port = 3000;

const requestHandler = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello, World!');
  response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Server listening on port ${port}`);
});