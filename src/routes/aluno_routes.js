const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno_controller');

router.get('/', alunoController.listarAlunos);
router.get('/masculino', alunoController.listarAlunosMasc);
router.get('/feminino', alunoController.listarAlunosFem);
router.get('/medias', alunoController.listarMediaAlunos);
router.get('/situacao', alunoController.listarSituacaoAlunos);
<<<<<<< HEAD
=======
router.get('/media-sexo', alunoController.listarSituacaoAlunos);
>>>>>>> f2e9ad2 (Criação endpoint para filtrar media e sexo de alunos)

module.exports = router;