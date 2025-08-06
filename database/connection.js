const mongoose = require('mongoose');
const uri = "mongodb+srv://andreclercandeia:$Sucesso11@clusterdn.goxg5nq.mongodb.net/projetoDN?retryWrites=true&w=majority&appName=ClusterDN";

mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro de conexão com o MongoDB:', err));