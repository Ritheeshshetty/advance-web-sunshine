const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "hacker";

//ROUTE 1: create a User using:Post "/api/auth/createuser".No login required
router.post(
  "/createuser",
  [
    body("name", "enter a valid name!").isLength({ min: 3 }),
    body("email", "enter a valid email!").isEmail(),
    body("password", "Password must be atleast 5 characters!").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success,
        error: "Sorry the user with this email already exists!",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // data collects user id for jwt token
      const data = {
        user: {
          id: user.id,
        },
      };

      // used to create token using JWT_SECRET and data
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      success = true;
      res.json({ success, authToken });

      // res.json({user})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 2: Authenticate a User using:Post "/api/auth/login".No login required
router.post(
  "/login",
  [
    body("email", "enter a valid email!").isEmail(),
    body("password", "password cannot be blank!").exists(),
  ],
  async (req, res) => {
    let success = false;
    // if there are error return a bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials!",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials!",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      // used to create token using JWT_SECRET and data
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3: Get logged in User details:Post "/api/auth/getuser". login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
