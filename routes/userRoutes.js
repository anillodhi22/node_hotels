const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.post("/", async(req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error!" });
    }
});

router.get("/", async(req, res) => {
    try {
        const data = await User.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error!" });
    }
});

router.get("/:workType", async(req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "waiter" || workType == "manager") {
            const response = await User.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid work type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error!" });
    }
});

router.put("/:id", async(req, res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = req.body;
        const response = await User.findByIdAndUpdate(personId, updatedPerson, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error!" });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const personId = req.params.id;
        const response = await User.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("user deleted!");
        res.status(200).json({ message: "person deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error!" });
    }
});

module.exports = router;