const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    username: {type: "string", required: true, trim: true},
    email: {type: "string", required: true, trim: true},
    password: {type: "string", required: true, trim: true}
},{
    timestamps: true
});

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;