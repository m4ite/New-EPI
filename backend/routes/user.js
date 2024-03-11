const express = require('express');
const router = express.Router();

router
    .get('/dados', (req, res) => {
        connection.query('SELECT * FROM sua_tabela', (err, results) => {
            if (err) {
                console.error('Erro ao executar consulta:', err);
                res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
                return;
            }
            res.json(results);
        });
    });


module.exports = router
