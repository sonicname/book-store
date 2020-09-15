require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db/index");
const app = express();

const bookRoutes = require("./routes/book.routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.once("open", () => {
  console.log("Database Connected!");
});

db.on("error", () => {
  console.log("Database connected fail!");
});

app.use("/api/v1/book", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
