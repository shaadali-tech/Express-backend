const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("Hello World");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
