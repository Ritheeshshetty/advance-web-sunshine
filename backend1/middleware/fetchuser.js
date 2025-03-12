// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "hacker";

// const fetchuser = (req, res, next) => {
//   // Get the user from the jwt token and add id to the req object
//   const token = req.header("auth-token");
//   if (!token) {
//     return res
//       .status(401)
//       .send({ error: "Please authenticate using a valid token" });
//   }
//   try {
//     const data = jwt.verify(token, JWT_SECRET);
//     req.user = data.user;
//     // console.log(req.user);
//     next();
//   } catch (error) {
//     console.error("JWT Verification Error:", error.message);
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// };

// module.exports = fetchuser;

const jwt = require("jsonwebtoken");
const JWT_SECRET = "hacker";

const fetchuser = (req, res, next) => {
  // Get token from header
  const token = req.header("auth-token") || req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ error: "Access denied, please provide a valid token" });
  }

  try {
    // If token uses Bearer format, remove "Bearer " prefix
    const actualToken = token.startsWith("Bearer ") ? token.slice(7) : token;

    const data = jwt.verify(actualToken, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = fetchuser;
