const express = require('express');
const {authVerification}= require("../helpers/tokenGenAndVerification")
const providerController =require("../controller/providerController/provider.ctlr")
const router = express.Router();

router.get("/get-allprofiles",providerController.getAllProfiles)
router.get("/get-allcategory",providerController.getAllCategory)
router.get("/get-profileById/:id",providerController.getProfileById)
router.get("/get-city-category-service",providerController.getAllCityCategoryService)
module.exports = router;
