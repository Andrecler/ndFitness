const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  cep: String,
  endereco: String,
  complemento: String,
  numero: String,
  telefone: String,
  email: String,
  senha:String,
});

module.exports = mongoose.model('Cliente', clienteSchema);