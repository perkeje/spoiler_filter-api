var express = require("express");
var router = express.Router();
var {
  create_new_review,
  get_all_reviews_paginated,
  get_all_users_reviews,
  update_review,
  delete_review,
  show_review
} = require("../../controllers/reviews_controller");
const { body } = require("express-validator");
var { authenticateToken } = require("../../middlewares/auth");


router.get("/", get_all_reviews_paginated);
router.use("/", authenticateToken);
router.post("/", 
  body("movie").notEmpty(), 
  body("review").notEmpty().isLength({max: 256}),
  body("grade").notEmpty().isNumeric(),
  create_new_review
  );
  router.get("/list", get_all_users_reviews);
router.get("/:id", show_review);
router.put("/:id", 
  body("movie").notEmpty(), 
  body("review").notEmpty().isLength({max: 256}),
  body("grade").notEmpty().isNumeric()
,update_review);
router.delete("/:id", delete_review);

module.exports = router;
