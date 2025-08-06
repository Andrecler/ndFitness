const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do express-session
app.use(session({
  secret: 'sua_chave_secreta_aqui', // Use uma string forte e aleatória
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // 'true' em produção se usar HTTPS
}));

//Rotas
app.use('/cadastro', require('./routes/clienteRoutes'));
app.use('/login', require('./routes/loginRoutes'));
app.use('/auth', require('./routes/authRoutes'));

//Conectando com o banco de dados
require('./database/connection');

//Testando aplicação 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});