const db = require("../db");

const getUniform = (_, res) => {
    const q = "SELECT * FROM UNIFORM";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data)
    })
}

module.exports = [getUniform]