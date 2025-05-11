const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno_controller');

router.get('/', alunoController.listarAlunos);
router.get('/masculino', alunoController.listarAlunosMasc);
router.get('/feminino', alunoController.listarAlunosFem);
router.get('/medias', alunoController.listarMediaAlunos);
router.get('/situacao', alunoController.listarSituacaoAlunos);

module.exports = router;