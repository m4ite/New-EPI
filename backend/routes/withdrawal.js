const express = require("express")
const [getWithdrawal, deleteWithdrawal] = require("../controllers/withdrawal.js");

const router = express.Router()

router.post("/withdrawal", getWithdrawal)
router.delete("/withdrawal", deleteWithdrawal)

module.exports = router