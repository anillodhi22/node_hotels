const mongoose = require("mongoose");
require("dotenv").config();

//const mongoUrl = process.env.DB_LOCAL_URL;
const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to mongodb server!");
});

db.on("error", (err) => {
    console.log("mongodb connection error!", err);
});

db.on("disconnected", () => {
    console.log("mongodb disconnected");
});

module.exports = db;