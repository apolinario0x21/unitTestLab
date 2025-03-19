const CarrinhoCompras = require('../src/CarrinhoCompras')

describe('Carrinho de compras', () => {
    let carrinho

    beforeEach(() => {
        carrinho = new CarrinhoCompras()
    })

    test('Adicionar produtos corretamente', () => {
        carrinho.adicionarProduto('Maça', 2.5, 3)
        carrinho.adicionarProduto('Banana', 1.2, 5)

        const produtos = carrinho.listarProdutos()
        expect(produtos).toEqual([
            {nome: 'Maça', preco: 2.5, quantidade: 3},
            {nome: 'Banana', preco: 1.2, quantidade: 5}
        ])
    } )

    test('Incrementar a quantidade de um produto pré existente', () => {
        carrinho.adicionarProduto('Maça', 2.5, 3)
        carrinho.adicionarProduto('Maça', 2.5, 2)

        expect(carrinho.listarProdutos()).toEqual([
            {nome: 'Maça', preco: 2.5, quantidade: 5}
        ])
    })

    test('Remover um produto', () => {
        carrinho.adicionarProduto('Melão', 5, 1)
        carrinho.removerProduto('Melão')

        const produtos = carrinho.listarProdutos()
        expect(produtos).toEqual([])
    })


    test('Lança erro ao testar remover um produto que não existe', () => {
        expect(() => carrinho.removerProduto('Banana')).toThrowError('Produto não encontrado')
    })

    test('Calcula o total',() => {
        carrinho.adicionarProduto('Maça', 2.5, 3)
        carrinho.adicionarProduto('Banana', 1.2, 5)

        const total = carrinho.calcularTotal()
        expect(total).toBeCloseTo(13.5)

    })

    test('Retornar a lista de produtos', () => {
        carrinho.adicionarProduto('Maça', 2.5, 3)
        carrinho.adicionarProduto('Banana', 1.2, 5)

        const produtos = carrinho.listarProdutos()
        expect(produtos).toEqual([
            {nome: 'Maça', preco: 2.5, quantidade: 3},
            {nome: 'Banana', preco: 1.2, quantidade: 5}
        ])
    })
})