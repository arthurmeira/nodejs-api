const app = require('./src/app');

const PORT = 3500; 
app.listen(PORT, () => { 
  console.log(`Servidor rodando na porta ${PORT}`);
});