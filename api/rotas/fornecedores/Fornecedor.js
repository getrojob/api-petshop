
const TabelaFornecedor = require('./TabelaFornecedor')
class Fornecedor {
    constructor({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar() {
        const resultados = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })
        this.id = resultados.id
        this.versao = resultados.versao
        this.dataCriacao = resultados.dataCriacao
        this.dataAtualizacao = resultados.dataAtualizacao
    }

    async carregar() {
        const encontrado = await TabelaFornecedor.pegarPorId(this.id)
        this.empresa = encontrado.empresa
        this.email = encontrado.email
        this.categoria = encontrado.categoria
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }
    async atualizar() {
        await TabelaFornecedor.pegarPorId(this.id)
        const campos = ['empresa', 'email', 'categoria']
        const dadosParaAtualizar = {}
        campos.forEach(campo => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })
        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Não há dados para atualizar')
        }
        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)
    }
}

module.exports = Fornecedor;
