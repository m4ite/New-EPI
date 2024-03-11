const mongoose = require("mongoose")

const Shed = mongoose.model("Shed", {
    ID: Number,
    Name: String,
    Number: String
})

module.exports = Shed;