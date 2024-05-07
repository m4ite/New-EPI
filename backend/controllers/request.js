const db = require("../db");

const addRequest = (req, res) => {
    const q = "INSERT INTO Requests (`Requests_Date`, `Requests_Status`, `Uniform_ID`, `User_ID`) VALUES (?)"

    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}-${dataAtual.getDate().toString().padStart(2, '0')}`;


    const values = [
        dataFormatada,
        0,
        req.body.Uniform,
        req.body.User
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

const getRequestClient = (req, res) => {
    const id = req.params.id

    const q = `
    SELECT
    Requests.ID,
    Requests.Request_Date,
    Uniform.Uniform_name,
    Shed.Shed_Name,
    Bosch_User.EDV,
    Requests.Request_Status
    FROM Requests
    INNER JOIN Uniform ON Requests.Uniform_ID = Uniform.ID
    INNER JOIN Bosch_User ON Requests.User_ID = Bosch_User.ID
    INNER JOIN Shed ON Bosch_User.Shed_ID = Shed.ID
    WHERE Bosch_User.EDV = (?)
    `;

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

const getRequest = (_, res) => {
    const q = `
    SELECT
    Requests.ID,
    Requests.Request_Date,
    Uniform.Uniform_name,
    Shed.Shed_Name,
    Bosch_User.EDV,
    Requests.Request_Status
    FROM Requests
    INNER JOIN Uniform ON Requests.Uniform_ID = Uniform.ID
    INNER JOIN Bosch_User ON Requests.User_ID = Bosch_User.ID
    INNER JOIN Shed ON Bosch_User.Shed_ID = Shed.ID;
    `;

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
        return res.status(200).json(data)
    })
}

module.exports = [getRequest, alterRequestADM, alterRequestClient, addRequest, getRequestClient]