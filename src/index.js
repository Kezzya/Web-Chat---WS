const express = require("express");
const app = express();

const path = require("path");

// const dirPath = __dirname
// const pathStatic = __dirname.length[__dirname.length - ];
app.use(express.static("../static"));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/index.html`);
});
app.get("/chats", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/chats.html`);
});
app.get("/profile", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/profile.html`);
});
app.get("/*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/404.html`);
});

app.get("/500", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/500.html`);
});
app.get("/registration", (req, resp) => {
  resp.sendFile(path.join(__dirname, "../") + `static/registration.html`);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
