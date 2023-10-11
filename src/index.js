const express = require("express");
const path = require("path"); // Import the 'path' module

const app = express();
const port = 80;

// Serve static files from the "public" directory using an absolute path
app.use(express.static(path.join(__dirname, "../public")));

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

// Starting the Server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
