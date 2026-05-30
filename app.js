const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Middleware executed 1");
  console.log("Request URL:", req.originalUrl);
  console.log("Request Method:", req.method);
  res.send("Hello, World!");
});

app.get("/about", (req, res, next) => {
  console.log("Middleware executed 2");
  console.log("Request URL:", req.originalUrl);
  console.log("Request Method:", req.method);
  res.send("About Us");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  console.log("Request Method:", req.method);
  res.send(`Contact Us at: example@email.com
    form: <form action="/contact-us" method="post">
    <input type="text" name="name" placeholder="Your Name">
    <input type="email" name="email" placeholder="Your Email">
    <textarea name="message" placeholder="Your Message"></textarea>
    <button type="submit">Send</button>
  </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  console.log("Request Method:", req.method);
  res.send("Thank you for contacting us!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
