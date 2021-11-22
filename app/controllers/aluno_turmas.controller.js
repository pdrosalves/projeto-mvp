const models = require('../db/models');

exports.store = async (aluno,id) => {
    const model = await models.aluno.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'turmas'
        }
    })

    let refsTurmas = [];

    for(let t in aluno.turmas){
        let turma = aluno.turmas[t];

        const [result] = await models.turma.findOrCreate({
            where: turma
        })

        refsTurmas.push(result.id)
    }

    model.addTurma(refsTurmas);

    return true
}

exports.destroy = async (aluno,id) => {
    const model = await models.aluno.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'turmas'
        }
    })

    let refsTurmas = [];

    for(let t in aluno.turmas){
        let turma = aluno.turmas[t];

        const result = await models.turma.findOne({
            where: turma
        })

        if(result){
            refsTurmas.push(result.id)
        }
        
    }

    model.removeTurma(refsTurmas);

    return true
}
