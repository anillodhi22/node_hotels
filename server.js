const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("hey try this new node.js project!");
});

const userRoutes = require("./routes/userRoutes");

app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("app listening on port 3000");
});