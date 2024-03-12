const express = require("express")
const userRoutes = require("./routes/users.js")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8080)