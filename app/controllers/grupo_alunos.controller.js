const models = require('../db/models');

exports.store = async (grupo,id) => {
    const model = await models.grupo.findOne({
        where:{
            id_grupo:id
        },
        include:{
            association:'alunos'
        }
    })

    let refsAlunos = [];

    for(let h in grupo.alunos){
        let aluno = grupo.alunos[h];

        const [result] = await models.aluno.findOrCreate({
            where: aluno
        })

        refsAlunos.push(result.id)
    }

    model.addAluno(refsAlunos);

    return true
}

exports.destroy = async (grupo,id) => {
    const model = await models.grupo.findOne({
        where:{
            id_grupo:id
        },
        include:{
            association:'alunos'
        }
    })

    let refsAlunos = [];

    for(let h in grupo.alunos){
        let aluno = grupo.alunos[h];

        const result = await models.aluno.findOne({
            where: aluno
        })

        if(result){
            refsAlunos.push(result.id)
        }
        
    }

    model.removeAluno(refsAlunos);

    return true
}
