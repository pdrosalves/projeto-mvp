const models = require('../db/models');

exports.index = async () => {
    const resultado = await models.questaoDia.findAll({
        include : ['aluno','questao']
    });
    return resultado
}

exports.show = async (id) => {
    const resultado = await models.questaoDia.findByPk(id);
    return resultado
}

exports.store = async (questaoDia) => {
    const resultado = await models.questaoDia.create(questaoDia);
    return resultado
}

exports.update = async (questaoDia,id) => {
    const resultado = await models.questaoDia.update(questaoDia,{
        where: {
            id:id
        }
    });
    return resultado
}

exports.destroy = async (id) => {
    const resultado = await models.questaoDia.destroy({
        where: {
            id:id
        }
    });
    return resultado
}

