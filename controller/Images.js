const uploadModel = require('../model/Upload');

const getAllImages = (req,res) => {
    uploadModel.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.json(err))
}

module.exports = getAllImages;