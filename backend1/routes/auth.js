// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const fetchuser = require("../middleware/fetchuser");

// const JWT_SECRET = process.env.JWT_SECRET || "hacker"; // Use environment variable for security

// //ROUTE 1: Create a User (No login required)
// router.post(
//   "/createuser",
//   [
//     body("name", "Enter a valid name!").isLength({ min: 3 }),
//     body("email", "Enter a valid email!").isEmail(),
//     body("password", "Password must be at least 5 characters!").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }

//     try {
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res.status(400).json({
//           success,
//           error: "User with this email already exists!",
//         });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       user = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: secPass,
//         isAdmin: req.body.isAdmin || false, // Default to false
//       });

//       // Create JWT payload
//       const data = {
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin, // Include admin status
//         },
//       };

//       // Generate token with expiration
//       const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

//       success = true;
//       res.json({ success, authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// //ROUTE 2: Login a User (No login required)
// router.post(
//   "/login",
//   [
//     body("email", "Enter a valid email!").isEmail(),
//     body("password", "Password cannot be blank!").exists(),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }

//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({
//           success,
//           error: "Invalid email or password!",
//         });
//       }

//       const passwordCompare = await bcrypt.compare(password, user.password);
//       if (!passwordCompare) {
//         return res.status(400).json({
//           success,
//           error: "Invalid email or password!",
//         });
//       }

//       // Create JWT payload
//       const data = {
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin, // Include admin status
//         },
//       };

//       // Generate token with expiration
//       const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

//       success = true;
//       res.json({ success, authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// //ROUTE 3: Get Logged-in User Details (Login required)
// router.post("/getuser", fetchuser, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select("-password");
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;

// const express = require("express");
// const User = require("../models/User");
// const Stats = require("../models/Stats"); // Import Stats model
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const fetchuser = require("../middleware/fetchuser");

// const JWT_SECRET = process.env.JWT_SECRET || "hacker"; // Use environment variable for security

// // ROUTE 1: Create a User (No login required)
// router.post(
//   "/createuser",
//   [
//     body("name", "Enter a valid name!").isLength({ min: 3 }),
//     body("email", "Enter a valid email!").isEmail(),
//     body("password", "Password must be at least 5 characters!").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }

//     try {
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res.status(400).json({
//           success,
//           error: "User with this email already exists!",
//         });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       user = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: secPass,
//         isAdmin: req.body.isAdmin || false, // Default to false
//       });

//       // Create JWT payload
//       const data = {
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin, // Include admin status
//         },
//       };

//       // Generate token with expiration
//       const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

//       success = true;
//       res.json({ success, authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// // ROUTE 2: Login a User (No login required)
// router.post(
//   "/login",
//   [
//     body("email", "Enter a valid email!").isEmail(),
//     body("password", "Password cannot be blank!").exists(),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }

//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({
//           success,
//           error: "Invalid email or password!",
//         });
//       }

//       const passwordCompare = await bcrypt.compare(password, user.password);
//       if (!passwordCompare) {
//         return res.status(400).json({
//           success,
//           error: "Invalid email or password!",
//         });
//       }

//       // Create JWT payload
//       const data = {
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin, // Include admin status
//         },
//       };

//       // Generate token with expiration
//       const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

//       // ✅ Increment login count in the Stats model
//       try {
//         let stats = await Stats.findOne({});
//         if (!stats) {
//           stats = new Stats({ loginCount: 1 }); // Create new stats if not found
//         } else {
//           stats.loginCount += 1; // Increment login count
//         }
//         await stats.save();
//       } catch (error) {
//         console.error("Error updating login stats:", error.message);
//       }

//       success = true;
//       res.json({ success, authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// // ROUTE 3: Get Logged-in User Details (Login required)
// router.post("/getuser", fetchuser, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select("-password");
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;

const express = require("express");
const User = require("../models/User");
const Stats = require("../models/Stats"); // Import Stats model
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET || "hacker"; // Use environment variable for security

// Helper function to get current date in YYYY-MM-DD format
const getFormattedDate = () => new Date().toISOString().split("T")[0];

// ROUTE 1: Create a User (No login required)
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name!").isLength({ min: 3 }),
    body("email", "Enter a valid email!").isEmail(),
    body("password", "Password must be at least 5 characters!").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "User with this email already exists!" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        isAdmin: req.body.isAdmin || false, // Default to false
      });

      // ✅ Update Stats for new user sign-up
      try {
        let stats = await Stats.findOne({});
        if (!stats) {
          stats = new Stats();
        }

        // Extract current date details
        const today = new Date();
        const year = today.getFullYear();
        const month = `${year}-${(today.getMonth() + 1)
          .toString()
          .padStart(2, "0")}`;
        const day = getFormattedDate();

        // Track yearly, monthly, and daily user sign-ups
        stats.userJoinsByYear[year] = (stats.userJoinsByYear[year] || 0) + 1;
        stats.userJoinsByMonth[month] =
          (stats.userJoinsByMonth[month] || 0) + 1;
        stats.userJoinsByDay[day] = (stats.userJoinsByDay[day] || 0) + 1;

        await stats.save();
      } catch (error) {
        console.error("Error updating user join stats:", error.message);
      }

      // Create JWT payload
      const data = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin, // Include admin status
        },
      };

      // Generate token with expiration
      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Login a User (No login required)
router.post(
  "/login",
  [
    body("email", "Enter a valid email!").isEmail(),
    body("password", "Password cannot be blank!").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Invalid email or password!" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ success, error: "Invalid email or password!" });
      }

      // ✅ Update login stats
      try {
        let stats = await Stats.findOne({});
        if (!stats) {
          stats = new Stats({ loginCount: 1 });
        } else {
          stats.loginCount += 1;
        }

        // Track daily logins
        const today = getFormattedDate();
        stats.dailyLoginCount[today] = (stats.dailyLoginCount[today] || 0) + 1;

        await stats.save();
      } catch (error) {
        console.error("Error updating login stats:", error.message);
      }

      // Create JWT payload
      const data = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin, // Include admin status
        },
      };

      // Generate token with expiration
      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get Logged-in User Details (Login required)
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
