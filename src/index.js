const express = require("express");
const app = express();

const path = require("path");

const dirPath = path.join(__dirname, "../");

// app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", dirPath + "static\\views");

app.use(express.static(dirPath + "static"));

app.get("/", (req, resp) => {
  resp.render(`index`);
});
app.get("/chats", (req, resp) => {
  resp.render(`chats`);
});
app.get("/profile", (req, resp) => {
  resp.render(`profile`);
});

app.get("/registration", (req, resp) => {
  resp.render(`registration`);
});
app.get("/500", (req, resp) => {
  resp.render(`500`);
});
app.get("/*", (req, resp) => {
  resp.render(`404`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
