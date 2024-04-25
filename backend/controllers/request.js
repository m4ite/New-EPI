const db = require("../db");

const addRequest = (req, res) => {
    const q = "INSERT INTO Request (`Request_Status`, `Uniform_ID`, `User_ID`) VALUES (?)"

    const values = [
        req.body.Uniform,
        req.body.User
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Requisição feita com sucesso!")
    })

}

const getRequest = (_, res) => {
    const q = "SELECT * FROM Requests";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

const alterRequestADM = (req, res) => {
    const id = req.params.id
    const q = `
        UPDATE Requests
        SET Request_Status = 1
        WHERE ID = (?);`

    const values = [
        id
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        console.log(data)
        return res.status(200).json(data)
    })
}

const alterRequestClient = (req, res) => {
    const id = req.params.id
    const q = `
        UPDATE Requests
        SET Request_Status = 2
        WHERE ID = (?);`

    const values = [
        id
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        console.log(data)
        return res.status(200).json(data)
    })
}

module.exports = [getRequest, alterRequestADM, alterRequestClient, addRequest]