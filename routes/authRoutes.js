const express = require('express');
const authController = require('../controller/authController/auth.ctlr');
const {authVerification}= require("../helpers/tokenGenAndVerification")

const router = express.Router();

router.post('/register', authController.signup);
router.put("/manage-profile",authVerification,authController.manageProfile)
router.post('/login', authController.signin);
router.get("/me",authVerification,authController.me)
router.get("/getCityCategoryService",authController.getCityCategoryService)
router.get("/currect-step",authVerification,authController.checkCurrentStep)
module.exports = router;
