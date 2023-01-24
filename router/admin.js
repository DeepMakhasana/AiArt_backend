const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const {upload, imageUpload} = require("../controller/ImageUpload");

router.get("/", cookieParser('secret'), (req,res) => {
    res.json(req.signedCookies);
})
router.post("/upload", upload, imageUpload);

module.exports = router;