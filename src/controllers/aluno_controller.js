const alunoService = require('../services/aluno_services');

async function listarAlunos(req, res) {
    try {
        const alunos = await alunoService.obterTodosOsAlunos();
        res.status(200).json(alunos);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao listar alunos"});
    }
} 

async function listarAlunosMasc(req, res) {
    try {
        const homens = await alunoService.obterAlunosMasc();
        res.status(200).json(homens);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao listar alunos do sexo masculino"});
    } 
}

async function listarAlunosFem(req, res) {
    try {
        const mulheres = await alunoService.obterAlunosFem();
        res.status(200).json(mulheres);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao listar alunos do sexo feminino"});
    } 
}

async function listarMediaAlunos(req, res) {
    try {
        const media = await alunoService.obterMediaAlunos();
        res.status(200).json(media);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao listar medias dos alunos "});
    } 
}

async function listarSituacaoAlunos(req, res) {
    try {
        const situacao = await alunoService.obterSituacaoAluno();
        res.status(200).json(situacao);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao listar situação dos alunos "});
    } 
}

module.exports = {
    listarAlunos,
    listarAlunosFem,
    listarAlunosMasc,
    listarMediaAlunos,
    listarSituacaoAlunos
};