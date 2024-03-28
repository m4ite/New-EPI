const db = require("../db");

const getMachine = (_, res) => {

    const q = `SELECT
        Machine.Machine_code AS codigo,
        Shed.Shed_Name AS localização,
        CASE
            WHEN Stock.Quantity < 5 THEN 'Baixo Estoque'
            ELSE 'Normal'
        END AS status
    FROM
        Machine
    INNER JOIN Shed ON Machine.Shed_ID = Shed.ID
    INNER JOIN Stock ON Machine.Stock_ID = Stock.ID`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

const addMachine = (req, res) => {
    const q =
        "INSERT INTO Machine(`Shed_ID`, `Quantity`) VALUES(?)";

    const values = [
        req.body.EPI_ID,
        req.body.Quantity
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão criado com sucesso.");
    });
};

const deleteMachine = (req, res) => {
    const q =
        "DELETE FROM Machine WHERE ID = (?)";

    const values = [
        req.body.ID
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão deletado com sucesso.");
    });
};

module.exports = [getMachine, addMachine, deleteMachine]