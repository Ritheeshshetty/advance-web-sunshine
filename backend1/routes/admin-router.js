// const express = require("express");
// const adminController = require("../controllers/admin-controllers");
// const fetchuser = require("../middleware/fetchuser");
// const adminMiddleware = require("../middleware/admin-middleware");
// const router = express.Router();

// router
//   .route("/users").get(fetchuser,adminMiddleware,adminController.getAllUsers);
// // router.route('/users').get(adminController.getAllUsers);

// module.exports = router;

const express = require("express");
const adminController = require("../controllers/admin-controllers");
const fetchuser = require("../middleware/fetchuser");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route("/users").get(fetchuser, adminMiddleware, adminController.getAllUsers);

module.exports = router;
