const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("hey try this new node.js project!");
});

const userRoutes = require("./routes/userRoutes");

app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log("app listening on port 3000");
});