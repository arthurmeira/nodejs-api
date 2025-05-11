const express = require('express');
const app = express(); // cria uma instacia da aplicação

app.use(express.json()); // middleware para aceitar o Json no corpo das aplicações

app.get('/', (req, res) => { // rota get para raiz /
  res.send('biconow'); // resposta para o navegador ou client
});

const PORT = 3000; // definição de porta que o server vai rodar, 3000
app.listen(PORT, () => { // inicia o servidor e escuta nessa porta
  console.log(`Servidor rodando na porta ${PORT}`);
});



/* 
GET: /alunos/:id - Busca um aluno específico por ID
POST: /alunos - Cadastra um novo aluno
PUT: /alunos/:id - Atualiza dados (ex: notas) de um aluno
DELETE: /alunos/:id - Remove um aluno do sistema

GET: /alunos/media/maior-que/:valor - Retorna alunos com média maior que 6.00
GET: /alunos/media/menor-que/:valor	- Retorna alunos com média menor que 6.00
GET: /alunos/media/maior-que/:valor/sexo/:sexo - Filtra por média >= 6.00 e sexo masculino 
GET: /alunos/medias - Retorna todas as médias dos alunos
GET: /alunos/estatisticas - Retorna estatísticas gerais (média geral, quantidade aprovados e reprovados)
GET: /alunos - Lista todos os alunos (com nome, sexo, notas, média)
*/