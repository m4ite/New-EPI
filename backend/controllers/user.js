const db = require("../db");

const getUser = (_, res) => {
  const q = "SELECT * FROM Bosch_User";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return data
  })
}

const userLogin = (req, res) => {

  const q = "SELECT * FROM Bosch_User WHERE EDV = ? AND User_Password = ?"

  const values = [
    req.body.edv,
    req.body.password
  ];

  db.query(q, [values[0], values[1]], (err, results) => {
    if (err) return res.json(err);

    if (results == ""){
      return res.status(404).json({message: "Usuário não encontrado!"})
    }

    return res.status(200).json(results);
  });
}

const addUser = (req, res) => {
  const q =
    "INSERT INTO Bosch_User(`EDV`, `User_Name`) VALUES(?)";

  const values = [
    req.body.EDV,
    req.body.User_Name
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};


const deleteUser = (req, res) => {
  const q =
    "DELETE FROM Bosch_User WHERE ID = (?)";

  const values = [
    req.body.ID
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

module.exports = [getUser, addUser, deleteUser, userLogin]