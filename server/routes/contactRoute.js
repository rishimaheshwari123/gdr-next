const express = require("express");
const { createContactCtrl, createEnquiryCtrl, submitApplication } = require("../controllers/contactCtrl");
const router = express.Router();

router.post("/create", createContactCtrl)
router.post("/enquiry", createEnquiryCtrl)
router.post('/career', submitApplication);


module.exports = router