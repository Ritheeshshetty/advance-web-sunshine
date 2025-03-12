// const express = require("express");
// const adminController = require("../controllers/admin-controllers");
// const fetchuser = require("../middleware/fetchuser");
// const adminMiddleware = require("../middleware/admin-middleware");
// const router = express.Router();

// router
//   .route("/users").get(fetchuser,adminMiddleware,adminController.getAllUsers);
// // router.route('/users').get(adminController.getAllUsers);

// module.exports = router;


//************************* before stats **************************** */

// const express = require("express");
// const adminController = require("../controllers/admin-controllers");
// const fetchuser = require("../middleware/fetchuser");
// const adminMiddleware = require("../middleware/admin-middleware");
// const router = express.Router();

// router.route("/users").get(fetchuser, adminMiddleware, adminController.getAllUsers);

// module.exports = router;

//************************* after stats **************************** */
const express = require("express");
const adminController = require("../controllers/admin-controllers");
const fetchuser = require("../middleware/fetchuser");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route("/users").get(fetchuser, adminMiddleware, adminController.getAllUsers);

// ✅ Add route to get statistics
router.route("/stats").get(fetchuser, adminMiddleware, adminController.getStats);

module.exports = router;
