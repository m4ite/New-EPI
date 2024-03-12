const db = require("../db");

const getUsers = (_, res) => {
    const q = "SELECT * FROM Bosch_User";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        console.log(data)
    })
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

module.exports = [getUsers, addUser]