const {DataTypes} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Curso = sequelize.define(name, 
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

Curso.associate = (models) => {
    Curso.belongsToMany(models.turma,{
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turmas'
    })
    Curso.hasMany(models.aluno,{
        foreignKey: {
            name: 'id_curso'
        },
        as: 'alunos'
    })
}

module.exports = Curso