const http = require("http");
const fs = require("fs")

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");

console.log(__filename)

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end(home);
  } else if (request.url === "/about") {
    response.end("<h1>About Page</h1>");
  } else if (request.url === "/contact") {
    response.end("<h1>Contact Page</h1>");
  } else if (request.url === "/service") {
    response.end("<h1>Service Page</h1>");
  } else {
    response.end("<h1>404 Page Not Found</h1>");
  }
  // 1st parameter is request, 2nd is response. The names given here are just variables.
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
