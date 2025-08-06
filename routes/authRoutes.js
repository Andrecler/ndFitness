const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');
const sessao = require('express-session');

router.get('/usuario-logado', (req, res) => {
    // Verifica se existe uma sessão ativa
    if (sessao.cliente) {
        // Envia os dados do usuário da sessão como JSON
        res.json({
            loggedIn: true,
            cliente: {
                nome: sessao.cliente.nome,
                cpf: sessao.cliente.cpf,
                cep: sessao.cliente.cep
            }
        });
    } else {
        res.json({
            loggedIn: false
        });
    }
});

router.get('/logout', (req, res) => {
   req.session.destroy(err => {
        if (err) {
            console.error('Erro ao destruir a sessão:', err);
            return res.status(500).send('Não foi possível fazer logout.');
        }

        sessao.cliente = null;
        req.session = null; 
        res.clearCookie('connect.sid'); 
        return res.status(201).send('logout realizado com sucesso.');
    });

});

module.exports = router;