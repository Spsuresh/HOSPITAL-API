const express = require("express");
const {
  registerDoctor,
  registerPatient,
  createReport,
  all_reports,
  AllReports,
  login,
} = require("../controllers/userControllers");
const passport = require("../config/passport");

const router = express.Router();

router.post("/doctors/register", registerDoctor);

router.post("/login", login);

router.post("/patients/register",registerPatient);

router.post(
  "/patients/:id/create_report", createReport);

router.get("/patients/:id/all_report", all_reports);

router.get("/reports/:status", AllReports);

module.exports = router;
