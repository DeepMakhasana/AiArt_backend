const express = require("express");
const router = express.Router();
const {upload, imageUpload} = require("../controller/ImageUpload");

router.post("/upload", upload, imageUpload);

module.exports = router;