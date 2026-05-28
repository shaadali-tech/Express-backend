const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);

  if (req.url === "/about") {
    res.write("<h1>About Us</h1><p>This is the about page.</p>");
    return res.end();
  } else if (req.url === "/contact") {
    res.write("<h1>Contact Us</h1><p>This is the contact page.</p>");
    return res.end();
  } else if (req.url === "/services") {
    res.write("<h1>Our Services</h1><p>This is the services page.</p>");
    return res.end();
  } else if (req.url === "/Home") {
    res.write("<h1>Home Page</h1><p>Welcome to our home page.</p>");
    return res.end();
  }

  res.write(`<html><body><h1>Welcome to our first routing page</h1>
    <ul>
      <li><a href='/about'>About</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/Home'>Home</a></li>
      <li><a href='/services'>Services</a></li>
    </ul>
  </body>
  </html>`);

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
