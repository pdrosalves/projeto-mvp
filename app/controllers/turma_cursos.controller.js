const models = require('../db/models');

exports.store = async (turma,id) => {
    const model = await models.turma.findOne({
        where:{
            id_turma:id
        },
        include:{
            association:'cursos'
        }
    })

    let refsCursos = [];

    for(let c in turma.cursos){
        let curso = turma.cursos[c];

        const [result] = await models.curso.findOrCreate({
            where: curso
        })

        refsCursos.push(result.id)
    }

    model.addCurso(refsCursos);

    return true
}

exports.destroy = async (turma,id) => {
    const model = await models.turma.findOne({
        where:{
            id_turma:id
        },
        include:{
            association:'cursos'
        }
    })

    let refsCursos = [];

    for(let c in turma.cursos){
        let curso = turma.cursos[c];

        const result = await models.curso.findOne({
            where: curso
        })

        if(result){
            refsCursos.push(result.id)
        }
        
    }

    model.removeCurso(refsCursos);

    return true
}
