const express = require('express');
const adsController = require('../controller/ads.ctlr.js');
const {authVerification}= require("../helpers/tokenGenAndVerification.js")

const router = express.Router();

router.post('/create-ads',authVerification, adsController.createAds);
router.get('/get-active-ads', authVerification,adsController.activeAds);
router.get("/my-ads",authVerification,adsController.myads)
router.get("/profile-list",authVerification,adsController.getProfileList)
router.put("/pauseAd/:id",authVerification,adsController.pauseAd)
router.put("/resumeAd/:id",authVerification,adsController.resumeAd)


module.exports = router;
