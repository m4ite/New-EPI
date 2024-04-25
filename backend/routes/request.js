const express = require("express")
const [getRequest, alterRequestADM, alterRequestClient, addRequest] = require("../controllers/request.js")

const router = express.Router()

router.get("/request", getRequest)
router.post("/request", addRequest)
router.patch("/requestADM/:id", alterRequestADM)
router.patch("/requestClient/:id", alterRequestClient)

module.exports = router