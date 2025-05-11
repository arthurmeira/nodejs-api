const express = require('express');
const app = express(); 

app.use(express.json()); 

const alunosRoutes = require('./routes/aluno_routes');
app.use('/alunos', alunosRoutes); 

module.exports = app; 