const express = require('express');

const router = express.Router();

router.use("/auth",require("./authRoutes"))
router.use("/ads",require("./adsRoutes"))
router.use("/file",require("./fileUploadRoutes"))
router.use("/provider",require("./providersRoutes"))


module.exports = router;
