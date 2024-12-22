const mysql = require('mysql2');

// Criando a conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Usuário do MySQL no XAMPP
  password: '', // Senha do MySQL (deixe em branco se não tiver senha)
  database: 'livro_indicacao'  // Nome do banco de dados
});

// Teste simples de conexão para verificar se tudo está funcionando
db.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados com sucesso!');
  }
});

// Exporte a conexão para ser usada em outros arquivos
module.exports = db;
