var express = require("express");
var cors = require("cors");
var router = express.Router();
var register = require("./auth/register");
var login = require("./auth/login");
var reviews = require("./app/reviews");

router.use(cors(
  {
    "origin": "*",
    "allowedHeaders" : "Authorization, jwt",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  }
));
router.use(express.json());

router.get("/", (req, res) => {
  res.json({ msg: "home" });
});
router.use("/login", login);
router.use("/register", register);
router.use("/reviews", reviews)

module.exports = router;
