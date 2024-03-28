const express = require("express")
const [getEPI, addEPI, deleteEPI] = require("../controllers/epi.js")

const router = express.Router()

router.get("/epis", getEPI)
router.post("/epis", addEPI)
router.delete("/epis", deleteEPI)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router