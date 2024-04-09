const db = require("../db");

const getWithdrawal = (req, res) => {
  const q = `
  SELECT withdrawal.Date_, EPI.EPi_Name, Shed.Shed_Name, DATE_ADD(withdrawal.Date_, 
  INTERVAL EPI.Days_time DAY) AS NextRemove
  FROM withdrawal 
  INNER JOIN EPI ON withdrawal.EPI_ID = EPI.Id
  INNER JOIN Shed ON withdrawal.Shed_ID = Shed.Id
  WHERE User_ID = (?);`;

  const id = [
    req.body.id
  ]

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data)
  })

}


const deleteWithdrawal = (req, res) => {
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

module.exports = [getWithdrawal, deleteWithdrawal]