const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");

// set view folder
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// set handlebars as view engine
app.set("view engine", "handlebars");

var people = ["John", "Sara", "Paul"];

var person = {
  firstName: "Peter",
  lastName: "Johnson",
};
// Home page
app.get("/", (req, res) => {
  res.render("home", {
    content: "This is some content",
    published: false,
    people,
    person,
  });
});

app.listen(3000, () => {
  console.log("server started on 3000...");
});
