const express = require('express');
const upload = require("../helpers/fileUploader.js");
const { getUploadURL, deleteFromS3 } = require('../utils/s3.config.js');
const router = express.Router();

router.post("/get-s3-url", async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    if (!fileName || !fileType) {
      return res.status(400).json({
        error: "fileName and fileType are required",
      });
    }

    const uploadUrl = await getUploadURL(fileName, fileType);

    return res.status(200).json({
      url: uploadUrl,
    });

  } catch (error) {
    console.error("S3 URL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/delete-s3file", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "File URL is required" });
    }

    const fileKey = url.split(".com/")[1];

    if (!fileKey) {
      return res.status(400).json({ error: "Invalid S3 URL format" });
    }

    // 2. S3 se delete karein
    await deleteFromS3(fileKey);

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
      deletedKey: fileKey
    });

  } catch (error) {
    console.error("S3 Delete Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;