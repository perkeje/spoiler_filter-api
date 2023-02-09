var express = require("express");
var router = express.Router();
var { predict } = require("../../controllers/predict_controller");

router.get("/", predict);

module.exports = router;
