# Unit Test

## Projeto de Testes Unitários com Jest
<p>Este projeto é um exemplo de implementação de testes unitários utilizando o Jest, uma poderosa ferramenta de teste para JavaScript. O objetivo é demonstrar boas práticas de testes e como estruturar um projeto de testes de forma clara e eficiente.</p>

## 🚀 Start
<p>Siga as instruções abaixo para configurar e executar o projeto localmente.</p>

## 📋 Pré-requisitos
- Node.js instalado (versão 12 ou superior)
- npm ou yarn (gerenciadores de pacotes)

## 🔧 Instalação
Clone o repositório:
   ```bash
   git clone https://github.com/apolinario0x21/unitTestLab.git
   ```

## Navegue até o diretório do projeto:
```bash
  pwd
  cd unitTestLab/src/
```

## Instale as dependências:
```bash
    npm install
    yarn install
```

## ⚙️ Configuração
Para configurar o Jest como ferramenta de teste, adicione o seguinte script ao seu package.json:

```bash
    "scripts": {
        "test": "jest"
    }
```

## 🧪 Executando os Testes
Para executar todos os testes do projeto, utilize o seguinte comando:
```bash
    npm test
    yarn test
```

## 📂 Estrutura do Projeto
A estrutura do projeto foi organizada para separar claramente o código-fonte dos testes:

```bash
unitTestLab/
├── node_modules/
├── src/
│   ├── calculateArea.js
│   ├── isEven.js
│   └── unit-test.js
├── tests/
│   ├── calculateArea.test.js
│   └── isEven.test.js
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## 📝 Exemplos de Testes
Aqui estão alguns exemplos de testes incluídos no projeto:

Testando a função ```calculateArea```

```javascript
 const calculateArea = require('../src/calculateArea');

test('Deve retornar a área correta para um círculo de raio 2', () => {
  expect(calculateArea('circle', 2)).toBeCloseTo(12.5663, 4);
});

test('Deve lançar um erro para um círculo de raio negativo', () => {
  expect(() => calculateArea('circle', -2)).toThrow("Raio deve ser um número positivo");
});
```

Testando a função ```isEven```
```javascript
const isEven = require('../src/isEven');

test('Deve retornar true para um número par', () => {
  expect(isEven(4)).toBe(true);
});

test('Deve retornar false para um número ímpar', () => {
  expect(isEven(3)).toBe(false);
});
```

## 🤝 Contribuição
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga os passos abaixo:

- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adiciona nova feature').
- Push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

## 📄 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE]() para mais detalhes.

Feito com ❤️ por apolinario0x21
