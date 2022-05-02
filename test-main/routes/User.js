const userController = require("../controllers/User.js");
const router = require("express").Router();
const Image = require("../middleware/fileUploads");

router.post("/register",Image.upload, userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
