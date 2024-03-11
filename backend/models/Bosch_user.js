const mongoose = require('mongoose')

const Bosch_user = mongoose.model('Bosch_user', {
    EDV: String,
    Name: String
})

module.exports = Bosch_user;