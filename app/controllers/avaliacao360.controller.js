const models = require('../db/models');

exports.index = async () => {
    const resultado = await models.avaliacao360.findAll({
        include : ['aluno','grupo','atividadeAvaliativa']
    });
    return resultado
}

exports.show = async (id) => {
    const resultado = await models.avaliacao360.findByPk(id);
    return resultado
}

exports.store = async (avaliacao360) => {
    const resultado = await models.avaliacao360.create(avaliacao360);
    return resultado
}

exports.update = async (avaliacao360,id) => {
    const resultado = await models.avaliacao360.update(avaliacao360,{
        where: {
            id:id
        }
    });
    return resultado
}

exports.destroy = async (id) => {
    const resultado = await models.avaliacao360.destroy({
        where: {
            id:id
        }
    });
    return resultado
}

