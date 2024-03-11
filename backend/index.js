const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

// Conectar-se ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar-se ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
