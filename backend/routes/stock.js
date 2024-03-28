const express = require("express")
const [getStock, addStock, deleteStock] = require("../controllers/stock.js")

const router = express.Router()

router.get("/stock", getStock)
router.post("/stock", addStock)
router.delete("/stock", deleteStock)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router