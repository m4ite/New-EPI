const db = require("../db");

const getStock = (_, res) => {
    const q = "SELECT * FROM Stock";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        console.log(data)
    })
}


const addStock= (req, res) => {
    const q =
        "INSERT INTO Stock(`EPI_ID`, `Quantity`) VALUES(?)";

    const values = [
        req.body.EPI_ID,
        req.body.Quantity
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão criado com sucesso.");
    });
};

const deleteStock = (req, res) => {
    const q =
        "DELETE FROM Stock WHERE ID = (?)";

    const values = [
        req.body.ID
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Barracão deletado com sucesso.");
    });
};

module.exports = [getStock, addStock, deleteStock]