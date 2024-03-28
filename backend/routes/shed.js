const express = require("express")
const [getSheds, addShed, deleteShed] = require("../controllers/shed.js")

const router = express.Router()

router.get("/epis", getSheds)
router.post("/epis", addShed)
router.delete("/epis", deleteShed)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router