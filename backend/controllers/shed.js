const db = require("../db");

const getShed = (_, res) => {
    const q = "SELECT * FROM Shed";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}


const addShed = (req, res) => {
    const q =
        "INSERT INTO Shed(`Shed_Name`, `Shed_Num`) VALUES(?)";

    const values = [
        req.body.Shed_Name,
        req.body.Shed_Num
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão criado com sucesso.");
    });
};

const deleteShed = (req, res) => {
    const q =
        "DELETE FROM Shed WHERE ID = (?)";

    const values = [
        req.body.ID
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão deletado com sucesso.");
    });
};

module.exports = [getShed, addShed, deleteShed]