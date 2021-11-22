//atividadeAvaliatiava model
const {DataTypes} = require('sequelize');

const name = require('path').basename(__filename.replace('.model',''),'.js');

const sequelize = require('../index').getConnection();

const AtividadeAvaliativa = sequelize.define(name, 
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

AtividadeAvaliativa.associate = (models) => {
    AtividadeAvaliativa.belongsTo(models.turma,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
    AtividadeAvaliativa.belongsToMany(models.hardskill,{
        through: 'atividadeAvaliativa_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'hardskills'
    })
    AtividadeAvaliativa.hasMany(models.grupo,{
        foreignKey: {
            name: 'id_atividadeAvaliativa_grupo'
        },
        as: 'grupos'
    })
    AtividadeAvaliativa.hasMany(models.avaliacao360,{
        foreignKey: {
            name: 'id_atividadeAvaliativa_avaliacao360'
        },
        as: 'avaliacoes360'
    })
}

module.exports = AtividadeAvaliativa