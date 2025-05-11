const fs = require('fs').promises;
const path = require('path');

const caminho = path.join(__dirname, '..', 'database', 'base_alunos.json');

async function listarAlunos() {
    const dados = await fs.readFile(caminho, 'utf-8');
    return JSON.parse(dados);
}

module.exports = {
    listarAlunos
};
