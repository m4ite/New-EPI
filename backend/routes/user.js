const express = require('express');
const router = express.Router();

router
    .get('/api/person/first', (req, res) => {
        console.log("Hello in console");
        return
    })

    
module.exports = router
