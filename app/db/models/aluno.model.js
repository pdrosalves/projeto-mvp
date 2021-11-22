const {DataTypes} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Aluno = sequelize.define(name, 
    {
        matricula: {
            type:DataTypes.STRING(10)
        },
    }, 
    {
        sequelize,
        tableName:name,
        timestamps:false
    }
)

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario,{
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })
    Aluno.belongsToMany(models.turma,{
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turmas'
    })
    Aluno.belongsToMany(models.hardskill,{
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })
    Aluno.belongsToMany(models.softskill,{
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskills'
    })
    Aluno.belongsTo(models.curso,{
        foreignKey: {
            name: 'id_curso'
        },
        as: 'curso'
    })
    Aluno.hasMany(models.questaodia,{
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'questoesdia'
    })
    Aluno.hasMany(models.tarefa,{
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefas'
    })
    Aluno.hasMany(models.avaliacao360,{
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'avaliacoes360'
    })
    Aluno.belongsToMany(models.grupo,{
        through: 'grupo_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupos'
    })
}

module.exports = Aluno