const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');
const multer = require('multer');

router.post('', async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).send('Cliente cadastrado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao cadastrar cliente');
  }
});

module.exports = router;