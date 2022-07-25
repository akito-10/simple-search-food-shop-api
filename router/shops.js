const express = require("express");
const router = express.Router();
const controller = require("../controller/shops");

router.route("/").get(controller.getShops);

module.exports = router;
