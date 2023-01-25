const multer = require('multer');
const UploadModel = require('../model/Upload');

// images Upload
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});
const upload = multer({ storage: storage}).single("imageFile");
// -------------------------------------------------------------!

const imageUpload = (req,res) => {
    let name = req.body.imageName.toLowerCase();
    const {filename} = req.file;
    const imageData = new UploadModel({imageName: name, imageFile: filename});

    imageData.save()
    .then(() => {res.status(200).json({message: "Upload successfully.", responseData: imageData})})
    .catch((err) => {res.status(400).json({message: "Upload Fail please try agin!"})})
}

module.exports = {upload, imageUpload};