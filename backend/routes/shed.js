const express = require("express")
const [getSheds, addShed, deleteShed] = require("../controllers/shed.js")

const router = express.Router()

router.get("/sheds", getSheds)
router.post("/sheds", addShed)
router.delete("/sheds", deleteShed)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router