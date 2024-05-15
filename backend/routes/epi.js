const express = require("express")
const [getEPI, addEPI, deleteEPI] = require("../controllers/epi.js")

const router = express.Router()

router.post("/epis", addEPI)
router.get("/epis/:id", getEPI)
router.delete("/epis", deleteEPI)
router.get("/episAll", deleteEPI)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router