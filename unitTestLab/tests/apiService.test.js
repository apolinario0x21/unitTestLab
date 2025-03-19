const axios = require('axios')
const apiService = require('../src/apiService')

jest.mock('axios') // mockando o módulo axios

describe('Testando chamada para API externa', () => { // teste para a função getData
    it('Deve retornar dados simulados da API', async () => { // teste assíncrono
        const mockedResponse = {
            data:
                {id: 1, name: 'teste'} // dados simulados
        }

        axios.get.mockResolvedValue(mockedResponse) // mockando a função get do axios
        const response = await apiService.getData() // chamando a função getData

        expect(response).toEqual(mockedResponse.data) // verificando se a resposta é igual aos dados simulados
        expect(axios.get).toHaveBeenCalledTimes(1) // verificando se a função get foi chamada uma vez
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users') // verificando se a função get foi chamada com o argumento correto

    })

    it('Deve lançar um erro quando a API falhar', async () => {
        axios.get.mockRejectedValue(new Error('Erro na API'))
    })
})
