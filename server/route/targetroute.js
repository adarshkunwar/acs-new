const express = require("express");
const {
  createTargetController,
  getTargetController,
} = require("../controller/targetcontroller");
const router = express.Router();
router.post("/add", createTargetController);

router.get("/", getTargetController);
module.exports = router;
