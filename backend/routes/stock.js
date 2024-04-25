const express = require("express")
const [getStock, addStock, deleteStock, getMachineStock] = require("../controllers/stock.js")

const router = express.Router()

router.get("/stock", getStock)
router.post("/stock", addStock)
router.delete("/stock", deleteStock)
router.get("/machineStock", getMachineStock)

module.exports = router