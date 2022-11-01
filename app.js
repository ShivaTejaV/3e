const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();

  let y = date.getFullYear();
  let ans = String(`${d}-${m}-${y}`);
  response.send(ans);
});

app.listen(3000);

module.exports = app;
