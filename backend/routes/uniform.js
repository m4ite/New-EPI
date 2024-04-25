const express = require("express")
const [getUniform] = require("../controllers/uniform.js")

const router = express.Router()

router.get("/uniform", getUniform)
router.get("/uniform/:id", )

module.exports = router