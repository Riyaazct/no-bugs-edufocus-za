const express = require("express");
const router = express.Router();
const path = require("path");



//Routes for images stored in server
const imagesRoot = path.join(__dirname, "images");
router.use("/images", express.static(imagesRoot));



module.exports = router;
