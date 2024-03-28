const express = require("express")
const [getMachine, addMachine, deleteMachine] = require("../controllers/machine.js")

const router = express.Router()

router.get("/machine", getMachine)
router.post("/machine", addMachine)
router.delete("/machine", deleteMachine)

module.exports = router