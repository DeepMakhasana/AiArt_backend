const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected Successfully!"))
.catch((err) => console.log(err))

