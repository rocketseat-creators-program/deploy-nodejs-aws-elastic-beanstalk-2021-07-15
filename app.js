const express = require("express");
const cors = require("cors");
const { mockData } = require("./mockData");

const app = express();
const port = process.env.port || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Works!");
});

app.get("/social", (req, res) => {
  res.send(mockData);
});

app.get("/social/:id", (req, res) => {
  var id = req.params.id;
  res.send(mockData[id]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
