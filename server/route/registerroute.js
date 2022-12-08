const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const {
  createLogincontroller,
  getLoginController,
  loginValidations,
  validate,
  userLogin,
} = require("../controller/registercontroller");

router.post("/register", loginValidations, validate, createLogincontroller);
router.post("/login", userLogin);
router.get("/", getLoginController);
module.exports = router;
