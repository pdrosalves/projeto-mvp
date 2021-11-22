const {DataTypes} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Grupo = sequelize.define(name, 
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

Grupo.associate = (models) => {
    Grupo.belongsToMany(models.aluno,{
        through: 'grupo_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'alunos'
    })
    Grupo.hasMany(models.tarefa,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefas'
    })
    Grupo.hasMany(models.avaliacao360,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'avaliacoes360'
    })
    Grupo.belongsTo(models.turma,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
    Grupo.belongsTo(models.atividadeavaliativa,{
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'atividadeAvaliativa'
    })
}

module.exports = Grupo