const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Importando a conexão com o banco de dados

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para autenticar o usuário (login)
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [results] = await db.promise().query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
    if (results.length > 0) {
      return res.status(200).json({ message: 'Login bem-sucedido', user: results[0] });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Rota para buscar livros
app.get('/api/livros', async (req, res) => {
  try {
    const [results] = await db.promise().query('SELECT * FROM livros');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar livros' });
  }
});

// Rota para buscar livros com filtros
app.get('/api/livros/filtros', async (req, res) => {
  const { genero, autor } = req.query;
  let query = 'SELECT * FROM livros WHERE 1 = 1';
  const params = [];

  if (genero) {
    query += ' AND genero = ?';
    params.push(genero);
  }
  if (autor) {
    query += ' AND autor = ?';
    params.push(autor);
  }

  try {
    const [results] = await db.promise().query(query, params);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar livros com filtros' });
  }
});

// Rota para adicionar um comentário
app.post('/api/comentarios', async (req, res) => {
  const { livro_id, usuario_id, comentario } = req.body;
  try {
    await db.promise().query(
      'INSERT INTO comentarios (livro_id, usuario_id, comentario) VALUES (?, ?, ?)',
      [livro_id, usuario_id, comentario]
    );
    res.json({ message: 'Comentário adicionado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao adicionar comentário' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
