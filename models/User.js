const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true,
    },
});

const user = mongoose.model("user", userSchema);

module.exports = user;