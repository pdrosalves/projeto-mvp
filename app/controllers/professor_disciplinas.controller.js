const models = require('../db/models');

exports.store = async (professor,id) => {
    const model = await models.professor.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'disciplinas'
        }
    })

    let refsDisciplinas = [];

    for(let d in professor.disciplinas){
        let disciplina = professor.disciplinas[d];

        const [result] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        refsDisciplinas.push(result.id)
    }

    model.addDisciplina(refsDisciplinas);

    return true
}

exports.destroy = async (professor,id) => {
    const model = await models.professor.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'disciplinas'
        }
    })

    let refsDisciplinas = [];

    for(let d in professor.disciplinas){
        let disciplina = professor.disciplinas[d];

        const result = await models.disciplina.findOne({
            where: disciplina
        })

        if(result){
            refsDisciplinas.push(result.id)
        }
        
    }

    model.removeDisciplina(refsDisciplinas);

    return true
}
