const express = require('express');
const adsController = require('../controller/boost.ctlr.js');
const {authVerification}= require("../helpers/tokenGenAndVerification.js")

const router = express.Router();

router.post('/create-boost',authVerification, adsController.createBoost);
router.get('/get-boost/:id', authVerification, adsController.getBoostById);
router.post('/verify-payment', authVerification, adsController.verifyAndActivateBoost);

module.exports = router;
