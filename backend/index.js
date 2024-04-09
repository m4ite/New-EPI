const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/users.js")
const epiRoutes = require("./routes/epi.js")
const shedRoutes = require("./routes/shed.js")
const machineRoutes = require("./routes/machine.js")
const withdrawal = require('./routes/withdrawal.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes, epiRoutes, shedRoutes, machineRoutes, withdrawal)

app.listen(8080)