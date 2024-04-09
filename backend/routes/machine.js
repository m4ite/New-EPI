const express = require("express")
const [getMachine, addMachine, deleteMachine, getMachineEPIS] = require("../controllers/machine.js")

const router = express.Router()

router.get("/machine", getMachine)
router.post("/machine", addMachine)
router.delete("/machine", deleteMachine)
router.get("/machineEpi/:id", getMachineEPIS)

module.exports = router