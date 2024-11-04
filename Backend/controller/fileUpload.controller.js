// fileController.js
const FileModel = require('../models/file.model');
const { uploadToCloudinary } = require('../utils/fileUploadUtil');

// Controller to handle a single file upload
const uploadSingleFile = async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ message: 'No file uploaded' });

        const uploadResult = await uploadToCloudinary(file.path);
        const newFile = await FileModel.create({
            description: req.body.description,
            file: uploadResult.secure_url,
            user: req.user.userId
        });

        res.status(201).json(newFile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle multiple files upload
const uploadMultipleFiles = async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) return res.status(400).json({ message: 'No files uploaded' });

        const uploadPromises = files.map(file => uploadToCloudinary(file.path));
        const uploadResults = await Promise.all(uploadPromises);

        const newFiles = await Promise.all(uploadResults.map(result =>
            FileModel.create({
                description: req.body.description,
                file: result.secure_url,
                user: req.user._id
            })
        ));

        res.status(201).json(newFiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
};
