const axios = require('axios')

const apiService = {
    getData: async () => { // método assíncrono que retorna os dados da API
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') // faz a requisição para a API

            return response.data // retorna os dados da API
        } catch (error) {
            throw new Error('Erro ao buscando dados da API')
        }
    }
}

module.exports = apiService