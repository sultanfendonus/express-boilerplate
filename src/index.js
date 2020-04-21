const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", mainRoute);

app.use((err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send({ code: err.statusCode, error: err.message });
});

app.listen(8080);
