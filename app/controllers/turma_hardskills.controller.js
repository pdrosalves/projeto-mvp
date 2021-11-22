const models = require('../db/models');

exports.store = async (turma,id) => {
    const model = await models.turma.findOne({
        where:{
            id_turma:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in turma.hardskills){
        let hardskill = turma.hardskills[h];

        const [result] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        refsHardSkills.push(result.id)
    }

    model.addHardskill(refsHardSkills);

    return true
}

exports.destroy = async (turma,id) => {
    const model = await models.turma.findOne({
        where:{
            id_turma:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in turma.hardskills){
        let hardskill = turma.hardskills[h];

        const result = await models.hardskill.findOne({
            where: hardskill
        })

        if(result){
            refsHardSkills.push(result.id)
        }
        
    }

    model.removeHardskill(refsHardSkills);

    return true
}
