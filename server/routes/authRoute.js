const express = require("express");
const {
  loginCtrl,
  registerCtrl,
  newJobAdd,
  getAllJobs,
  deleteJob
} = require("../controllers/authCtrl"); // Adjust the import if necessary
const { getQuotes } = require("../controllers/contactCtrl");

const router = express.Router();

// Quotes endpoint
router.post("/getQuotes", getQuotes);

// Authentication endpoints
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

// Job-related endpoints
router.post("/jobs", newJobAdd);
router.get("/jobs", getAllJobs);
router.delete("/jobs/:id", deleteJob);

module.exports = router;
