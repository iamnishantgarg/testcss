const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
  res.render("index");
});
app.get("/green", (req, res, next) => {
  res.render("other");
});
app.listen(3000, err => {
  console.log("listening to port 3000");
});
