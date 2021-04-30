const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));
const viewsPath = path.join(__dirname, "../public/templates/views");
const partialsPath = path.join(__dirname, "../public/templates/partials");
console.log(viewsPath);
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Page Not Found!!",
  });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
