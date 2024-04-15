const db = require("../db");


const getEPI = (_, res) => {
    const q = "SELECT * FROM EPI";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data)
    })
}


const addEPI = (req, res) => {
    const q =
      "INSERT INTO EPI(`EPI_Name`, `Days_time`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.prazo
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("EPI inserido com sucesso.");
    });
  };


const deleteEPI = (req, res) => {
    const q =
      "DELETE FROM EPI WHERE ID = (?)";
  
    const values = [
      req.body.ID
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("EPI deletado com sucesso.");
    });
  };


module.exports = [getEPI, addEPI, deleteEPI]