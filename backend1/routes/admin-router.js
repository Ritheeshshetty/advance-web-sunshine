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


// Update user by ID (PUT)
router
  .route("/users/:id")
  .put(fetchuser, adminMiddleware, adminController.updateUserById);

// Delete user by ID (DELETE)
router
  .route("/users/:id")
  .delete(fetchuser, adminMiddleware, adminController.deleteUserById);


module.exports = router;
