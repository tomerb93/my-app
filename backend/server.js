const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const path = require("path");
const connectDB = require("./dbconfig/db");

const app = express();

connectDB();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.use(express.json());
// tslint:disable-next-line: deprecation
app.use(bodyParser.json());
// tslint:disable-next-line: deprecation
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", userRoutes);

app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server now listening on ${port}..`);
});
