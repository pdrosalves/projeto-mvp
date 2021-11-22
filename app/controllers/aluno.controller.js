const models = require('../db/models');

exports.index = async () => {
    const resultado = await models.aluno.findAll({
        include : ['curso']
    });
    return resultado
}

exports.show = async (id) => {
    const resultado = await models.aluno.findByPk(id);
    return resultado
}

exports.store = async (aluno) => {
    const resultado = await models.aluno.create(aluno,{
        include : ['tarefas','questoesDia','avaliacoes360']
    });
    return resultado
}

exports.update = async (aluno,id) => {
    const resultado = await models.aluno.update(aluno,{
        where: {
            id:id
        }
    });
    return resultado
}

exports.destroy = async (id) => {
    const resultado = await models.aluno.destroy({
        where: {
            id:id
        }
    });
    return resultado
}

