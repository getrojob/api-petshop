const Sequelize = require('sequelize')

const instancia = require('../../banco-de-dados/index')
const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedo', 'acessórios', 'medicamento', 'outros'),
        allowNull: false
    },
}
const opcoes = {
    freezeTablename: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'

}
module.exports = instancia.define('fornecedor', colunas, opcoes)
