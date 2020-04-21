const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.handleHomePage);

module.exports = router;
