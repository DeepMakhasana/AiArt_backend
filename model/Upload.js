const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
    imageName: {
        type: "string",
        required: true,
        trim: true
    },
    imageFile: {
        type: "string",
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const UploadModel = mongoose.model('uploadData', UploadSchema);

module.exports = UploadModel;