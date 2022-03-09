const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");

const db = lowDb(new FileSync("Movies.json"));

db.defaults({ data: {} }).write();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 4000;

app.get("/data/", (req, res) => {
  const data = db.get("data").value();
  return res.json(data);
});

app.get("/data/:akelab", (req, res) => {
  let variable = req.params.akelab;
  const data = db.get("data").value();
  return res.json(variable);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
