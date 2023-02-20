const express = require("express");
const User = require("../models/user");

const router = new express.Router();

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    console.log(user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCrendentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
