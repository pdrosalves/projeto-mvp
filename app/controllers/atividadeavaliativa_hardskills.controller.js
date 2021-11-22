const models = require('../db/models');

exports.store = async (atividadeAvaliativa,id) => {
    const model = await models.atividadeAvaliativa.findOne({
        where:{
            id_atividadeAvaliativa:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in atividadeAvaliativa.hardskills){
        let hardskill = atividadeAvaliativa.hardskills[h];

        const [result] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        refsHardSkills.push(result.id)
    }

    model.addHardskill(refsHardSkills);

    return true
}

exports.destroy = async (atividadeAvaliativa,id) => {
    const model = await models.atividadeAvaliativa.findOne({
        where:{
            id_atividadeAvaliativa:id
        },
        include:{
            association:'hardskills'
        }
    })

    let refsHardSkills = [];

    for(let h in atividadeAvaliativa.hardskills){
        let hardskill = atividadeAvaliativa.hardskills[h];

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
