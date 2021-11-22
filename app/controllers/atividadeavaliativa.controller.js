const models = require('../db/models');

exports.index = async () => {
    const resultado = await models.atividadeAvaliativa.findAll({
        include : ['turma']
    });
    return resultado
}

exports.show = async (id) => {
    const resultado = await models.atividadeAvaliativa.findByPk(id);
    return resultado
}

exports.store = async (atividadeAvaliativa) => {
    const resultado = await models.atividadeAvaliativa.create(atividadeAvaliativa,{
        include : ['avaliacoes360','grupos']
    });
    return resultado
}

exports.update = async (atividadeAvaliativa,id) => {
    const resultado = await models.atividadeAvaliativa.update(atividadeAvaliativa,{
        where: {
            id:id
        }
    });
    return resultado
}

exports.destroy = async (id) => {
    const resultado = await models.atividadeAvaliativa.destroy({
        where: {
            id:id
        }
    });
    return resultado
}

