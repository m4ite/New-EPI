const mongoose = require('mongoose')

const Machine = mongoose.model('Machine', {
    ID: Number,
    Shed_ID: Number
})

module.exports = Bosch_user;