var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
var JWT = require("../middleware/jwt");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", userController.registerAPI);
router.post("/login", userController.loginAPI);
router.get("/userslist", JWT.checkToken, userController.getAllUsersAPI);

module.exports = router;
