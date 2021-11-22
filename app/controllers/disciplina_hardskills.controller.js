const models = require('../db/models');

exports.store = async (disciplina,id) => {
    const model = await models.disciplina.findOne({
        where:{
            id_disciplina:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in disciplina.hardskills){
        let hardskill = disciplina.hardskills[h];

        const [result] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        refsHardSkills.push(result.id)
    }

    model.addHardskill(refsHardSkills);

    return true
}

exports.destroy = async (disciplina,id) => {
    const model = await models.disciplina.findOne({
        where:{
            id_disciplina:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in disciplina.hardskills){
        let hardskill = disciplina.hardskills[h];

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
