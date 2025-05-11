# nodejs-api
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
