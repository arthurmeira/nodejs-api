const alunoModel = require('../models/aluno_model');

async function obterTodosOsAlunos() {
    return await alunoModel.listarAlunos();
}

async function obterAlunosMasc() {
    const alunos = await alunoModel.listarAlunos();
    return alunos.filter(aluno => aluno.sexo === 'M');
}

async function obterAlunosFem() {
    const alunos = await alunoModel.listarAlunos();
    return alunos.filter(aluno => aluno.sexo === 'F');
}

async function obterMediaAlunos() {
    const alunos = await alunoModel.listarAlunos();
    return alunos.map(aluno =>  {
        const media = ((aluno.nota1 + aluno.nota2) / 2).toFixed(2);
        return {
            nome: aluno.nome,
            media: Number(media)
        };
    });
}; 

async function obterSituacaoAluno() {
    const alunos = await alunoModel.listarAlunos();

        return alunos.map(aluno =>  {
        const media = (aluno.nota1 + aluno.nota2) / 2;

        const situacao = media >= 6 ? "Aprovado" : "Reprovado";
        return {
            nome: aluno.nome,
            media: Number(media.toFixed(2)),
            situacao
        };
    });
}; 


module.exports = {
    obterTodosOsAlunos,
    obterAlunosFem,
    obterAlunosMasc,
    obterMediaAlunos,
    obterSituacaoAluno
};