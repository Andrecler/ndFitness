const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');
const sessao = require('express-session');

// Rota de login
router.post('/', async (req, res) => { 
    const { cpf, senha } = req.body;
    try {
        const usuarioEncontrado = await Cliente.findOne({ cpf: cpf, senha: senha });

        if (usuarioEncontrado) {
           sessao.cliente = usuarioEncontrado;
            res.status(200).send('Login bem-sucedido!');
        } else {
            res.status(401).send('Credenciais inválidas!');
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send('Ocorreu um erro no servidor.');
    }
});

module.exports = router;