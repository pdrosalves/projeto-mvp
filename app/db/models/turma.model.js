//turma model
const {DataTypes} = require('sequelize');

const name = require('path').basename(__filename.replace('.model',''),'.js');

const sequelize = require('../index').getConnection();

const Turma = sequelize.define(name, 
    {
        descricao:{
            type:DataTypes.STRING(50)
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'criado_em'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'atualizado_em'
        },
    }, 
    {
        sequelize,
        tableName:name,
    }
)

Turma.associate = (models) => {
    Turma.belongsToMany(models.professor,{
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professores'
    })
    Turma.belongsToMany(models.aluno,{
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'alunos'
    })
    Turma.belongsTo(models.disciplina,{
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'disciplina'
    })
    Turma.belongsToMany(models.hardskill,{
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskills'
    })
    Turma.belongsToMany(models.curso,{
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'cursos'
    })
    Turma.hasMany(models.atividadeavaliativa,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'atividadesavaliativas'
    })
    Turma.hasMany(models.grupo,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'grupos'
    })
}

module.exports = Turma