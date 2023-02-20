const express = require("express");
const auth = require("../middleware/auth");
const Task = require("../models/task");

const router = express();

router.post("/tasks", auth, async (req, res) => {
  try {
    const newTask = new Task({
      owner: req.user._id,
      ...req.body,
    });

    await newTask.save();

    res.send(newTask);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
