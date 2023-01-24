const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// include router
const admin = require("./router/admin");
const normal = require("./router/normal");
// include DB
require("./db/config");
const PORT = process.env.PORT || 1013;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/upload', express.static('upload'));
app.use(cookieParser());

// use router
app.use("/admin", admin);
app.use("/", normal);

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${process.env.PORT}`);
})

