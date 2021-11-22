const models = require('../db/models');

exports.store = async (aluno,id) => {
    const model = await models.aluno.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'softskills'
        }
    })

    let refsSoftSkills = [];

    for(let h in aluno.softskills){
        let softskill = aluno.softskills[h];

        const [result] = await models.softskill.findOrCreate({
            where: softskill
        })

        refsSoftSkills.push(result.id)
    }

    model.addSoftskill(refsSoftSkills);

    return true
}

exports.destroy = async (aluno,id) => {
    const model = await models.aluno.findOne({
        where:{
            id_usuario:id
        },
        include:{
            association:'softskills'
        }
    })

    let refsSoftSkills = [];

    for(let h in aluno.softskills){
        let softskill = aluno.softskills[h];

        const result = await models.softskill.findOne({
            where: softskill
        })

        if(result){
            refsSoftSkills.push(result.id)
        }
        
    }

    model.removeSoftskill(refsSoftSkills);

    return true
}
