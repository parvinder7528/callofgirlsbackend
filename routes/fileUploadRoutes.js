const express = require('express');
const upload = require("../helpers/fileUploader.js");
const router = express.Router();

router.post("/upload", upload.array('photos', 8), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }
        const url = "http://localhost:4000"
        const fileUrls = req.files.map(file => {
            return `${url}/uploads/gallery/${file.filename}`;
        });

        return res.status(200).json({
            success: true,
            message: "Uploaded successfully",
            paths: fileUrls
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;