const express = require("express")
const [getWithdrawal, addWithdrawal, deleteWithdrawal] = require("../controllers/withdrawal.js");

const router = express.Router()

router.get("/withdrawal", getWithdrawal)
router.post("/withdrawal", addWithdrawal)
router.delete("/withdrawal", deleteWithdrawal)


// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router