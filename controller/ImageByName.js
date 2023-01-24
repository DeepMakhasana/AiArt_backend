const uploadModel = require('../model/Upload');

const getByNameOfImages = (req,res) => {
    uploadModel.find({imageName: req.params.name})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.json(err))
}

module.exports = getByNameOfImages;