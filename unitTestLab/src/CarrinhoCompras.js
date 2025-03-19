class CarrinhoCompras {
    constructor() {
        this.produtos = [] // inicia um array vazio
    }
    adicionarProduto(nome, preco, quantidade) {
        const produtoExistente = this.produtos.find(produto => produto.nome === nome) // verifica se o produto já existe

        if(produtoExistente){
            produtoExistente.quantidade += quantidade // se o produto já existe, apenas incrementa a quantidade
        } else {
            this.produtos.push({nome, preco, quantidade}) // se não existe, adiciona um novo produto
        }
    }

    removerProduto(nome) {
        const index = this.produtos.findIndex(produto => produto.nome === nome) // encontra o índice do produto

        if(index === -1){
            throw new Error(`Produto não encontrado`) // se não encontrar o produto, lança um erro
        }

        this.produtos.splice(index, 1) // remove o produto do array
        // splice remove um elemento do array, no caso, 1 elemento a partir do índice encontrad
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => { // reduce percorre o array e acumula o valor total
            return total + (produto.preco * produto.quantidade)
        }, 0)
    }

    listarProdutos() {
        return this.produtos.map(produto => ({ // map percorre o array e retorna um novo array com os produtos
            nome: produto.nome,
            preco: produto.preco,
            quantidade: produto.quantidade
        }))

    }
}

module.exports = CarrinhoCompras;