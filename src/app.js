const path = require("path");
const express = require("express");
const app = express();
// Defined paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "./templates");
// Setup handlebars engine and views Location
// set allows to set a value
app.set("view engine", "hbs");
// If there is change in the name of the view folder
app.set("views", viewsPath);
// Set up static directory to serve 
// Serving(customizing) up the server
app.use(express.static(publicDirectoryPath));

// Routes
// Dynamic routing
// First argument is  the name to render and second argument is the object that view will be accessing.
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Samir Kumar",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Samir Kumar",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is help text",
  });
});

app.get("/weather", (req, res) => {
  res.send("Weather");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});

// To render dynamic web pages we need template engine.
// here the template engine will be handle bars
// example: If we want to provide a header and footer in each page then we
// writing the same in every page is not ideal instead it would be ideal
// if we define it at some single page.
