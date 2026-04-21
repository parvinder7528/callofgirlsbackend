const express = require('express');

const router = express.Router();

router.use("/auth",require("./authRoutes.js"))
router.use("/ads",require("./adsRoutes.js"))
router.use("/file",require("./fileUploadRoutes.js"))
router.use("/provider",require("./providersRoutes.js"))


module.exports = router;
