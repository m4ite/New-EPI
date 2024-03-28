const express = require("express")
const userRoutes = require("./routes/users.js")
const epiRoutes = require("./routes/epi.js")
const shedRoutes = require("./routes/shed.js")
const machineRoutes = require("./routes/machine.js")
const cors = require("cors")
const { matchRoutes } = require("react-router-dom")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes, epiRoutes, shedRoutes, machineRoutes)

app.listen(8080)