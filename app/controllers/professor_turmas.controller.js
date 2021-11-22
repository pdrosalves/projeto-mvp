const models = require('../db/models');

exports.store = async (professor,id) => {
    const model = await models.professor.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'turmas'
        }
    })

    let refsTurmas = [];

    for(let t in professor.turmas){
        let turma = professor.turmas[t];

        const [result] = await models.turma.findOrCreate({
            where: turma
        })

        refsTurmas.push(result.id)
    }

    model.addTurma(refsTurmas);

    return true
}

exports.destroy = async (professor,id) => {
    const model = await models.professor.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'turmas'
        }
    })

    let refsTurmas = [];

    for(let t in professor.turmas){
        let turma = professor.turmas[t];

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
