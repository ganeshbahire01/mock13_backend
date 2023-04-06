const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/User.model");
const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
  const {email, password } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const User = new UserModel({
          email,
          password: hash,
        });
        await User.save();
        res.send("registered successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.find({ email });
    if (User.length > 0) {
      bcrypt.compare(password, User[0].password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ Id: User[0]._id }, "masai");
          res.send({ msg: "Login Successful", token: token });
        } else {
          res.send({ msg: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRoutes;