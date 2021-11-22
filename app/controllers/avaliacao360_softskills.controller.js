const models = require('../db/models');

exports.store = async (avaliacao360,id) => {
    const model = await models.avaliacao360.findOne({
        where:{
            id_avaliacao360:id
        },
        include:{
            association:'softskills'
        }
    })

    let refsSoftSkills = [];

    for(let h in avaliacao360.softskills){
        let softskill = avaliacao360.softskills[h];

        const [result] = await models.softskill.findOrCreate({
            where: softskill
        })

        refsSoftSkills.push(result.id)
    }

    model.addSoftskill(refsSoftSkills);

    return true
}

exports.destroy = async (avaliacao360,id) => {
    const model = await models.avaliacao360.findOne({
        where:{
            id_avaliacao360:id
        },
        include:{
            association:'softskills'
        }
    })

    let refsSoftSkills = [];

    for(let h in avaliacao360.softskills){
        let softskill = avaliacao360.softskills[h];

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
