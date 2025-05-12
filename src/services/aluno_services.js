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
<<<<<<< HEAD
    return alunos.map(aluno =>  {
=======
    return alunos.map(aluno => {
>>>>>>> f2e9ad2 (Criação endpoint para filtrar media e sexo de alunos)
        const media = ((aluno.nota1 + aluno.nota2) / 2).toFixed(2);
        return {
            nome: aluno.nome,
            media: Number(media)
        };
    });
<<<<<<< HEAD
}; 

async function obterSituacaoAluno() {
    const alunos = await alunoModel.listarAlunos();

        return alunos.map(aluno =>  {
=======
};

async function obterSituacaoAluno() {
    const alunos = await alunoModel.listarAlunos();
    return alunos.map(aluno => {
>>>>>>> f2e9ad2 (Criação endpoint para filtrar media e sexo de alunos)
        const media = (aluno.nota1 + aluno.nota2) / 2;

        const situacao = media >= 6 ? "Aprovado" : "Reprovado";
        return {
            nome: aluno.nome,
            media: Number(media.toFixed(2)),
            situacao
        };
    });
<<<<<<< HEAD
}; 
=======
};

async function mediaPorSexo() {
    const alunos = await alunoModel.listarAlunos();
    return alunos = alunos.filter(aluno => {
        const media = (aluno.nota1 + aluno.nota2) / 2;
        nome: aluno.nome,
            aluno.sexo === 'M'
        media: (aluno.nota1 + aluno.nota2) / 2;
    });
};
>>>>>>> f2e9ad2 (Criação endpoint para filtrar media e sexo de alunos)


module.exports = {
    obterTodosOsAlunos,
    obterAlunosFem,
    obterAlunosMasc,
    obterMediaAlunos,
<<<<<<< HEAD
    obterSituacaoAluno
=======
    obterSituacaoAluno,
    mediaPorSexo
>>>>>>> f2e9ad2 (Criação endpoint para filtrar media e sexo de alunos)
};