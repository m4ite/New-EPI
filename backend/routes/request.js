const express = require("express")
const [getRequest, alterRequestADM, alterRequestClient, addRequest, getRequestClient] = require("../controllers/request.js")

const router = express.Router()

router.get("/request", getRequest)
router.post("/request", addRequest)
router.patch("/requestADM/:id", alterRequestADM)
router.get("/getRequestClient/:id", getRequestClient)
router.patch("/requestClient/:id", alterRequestClient)

module.exports = router