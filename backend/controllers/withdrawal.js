const db = require("../db");

const getWithdrawal = (_, res) => {
  const q = "SELECT * FROM Withdrawal";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data)
  })
}


const addWithdrawal = (req, res) => {
  const q =
    "INSERT INTO Withdrawal(`EPI_ID`, `User_ID`, `Shed_ID`, `Date_`) VALUES(?)";

  const values = [
    req.body.EPI_ID,
    req.body.User_ID,
    req.body.Shed_ID,
    req.body.Date_
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};


const deleteWithdrawal= (req, res) => {
  const q =
    "DELETE FROM Withdrawal WHERE ID = (?)";

  const values = [
    req.body.ID
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

module.exports = [getWithdrawal, addWithdrawal, deleteWithdrawal]