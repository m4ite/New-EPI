const express = require("express")
const [getMachine, addMachine, deleteMachine, getMachineEPIS] = require("../controllers/machine.js")

const router = express.Router()

router.get("/machine", getMachine)
router.post("/machineEpi/:shedId/:epiList", addMachine)
router.delete("/machine", deleteMachine)
router.get("/machineEpi/:id", getMachineEPIS)

module.exports = router