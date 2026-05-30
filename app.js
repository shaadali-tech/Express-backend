const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "./pages";
  console.log(req.url);
  console.log(req.method);
  if (req.url === "/") {
    filePath = path.join(__dirname, "pages", "home.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "pages", "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "pages", "contact.html");
  } else {
    filePath = path.join(__dirname, "pages", "404.html");
  }

  if (filePath) {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 - Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
