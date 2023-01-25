const express = require("express");
const router = express.Router();

const Register = require("../controller/Register");
const Login = require("../controller/Login");
const Images = require("../controller/Images");
const ImageByName = require("../controller/ImageByName");


router.post("/register", Register);
router.post("/login", Login);
router.get("/images", Images);
router.get("/image/:name", ImageByName);


module.exports = router;