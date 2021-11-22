const models = require('../db/models');

exports.index = async () => {
    const resultado = await models.turma.findAll({
        include : ['disciplina']
    });
    return resultado
}

exports.show = async (id) => {
    const resultado = await models.turma.findByPk(id);
    return resultado
}

exports.store = async (turma) => {
    const resultado = await models.turma.create(turma,{
        include : ['grupos','atividadesAvaliativas']
    });
    return resultado
}

exports.update = async (turma,id) => {
    const resultado = await models.turma.update(turma,{
        where: {
            id:id
        }
    });
    return resultado
}

exports.destroy = async (id) => {
    const resultado = await models.turma.destroy({
        where: {
            id:id
        }
    });
    return resultado
}

