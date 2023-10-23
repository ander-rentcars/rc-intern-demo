# Demo Rentcars Intern Program  

Este é um projeto em Node.js que visa servir como uma demonstração para uma prova de programa de estágio. O projeto consiste em um aplicativo CRUD (Create, Read, Update, Delete) para gerenciar veículos em uma locadora de carros. Abaixo estão detalhadas as informações essenciais para entender e executar o projeto.

## Requisitos

- Node.js versão 18
- npm (Node Package Manager)
- Docker (para execução do banco de dados MySQL)

## Dependências

O projeto utiliza as seguintes dependências:

- [Express](https://expressjs.com/): Um framework web para Node.js que simplifica a criação de APIs RESTful.
- [mysql2](https://www.npmjs.com/package/mysql2): Um driver MySQL para Node.js.
- [Sequelize](https://sequelize.org/): Uma biblioteca ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados.
- [Nodemon](https://nodemon.io/): Uma ferramenta que monitora as mudanças no código e reinicia o servidor automaticamente.

## Iniciando o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. Certifique-se de que você tem o Node.js (versão 18 ou superior) instalado em sua máquina.

2. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

3. É necessário executar um container Docker com um banco de dados MySQL. Para fazer isso, execute o seguinte comando:

```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

4. Com o banco de dados MySQL em execução, você pode iniciar o servidor do projeto com o seguinte comando:

```bash
npm start
```


5. O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

O projeto fornece os seguintes endpoints para gerenciar veículos:

- `GET /veiculos`: Retorna a lista de todos os veículos.
- `GET /veiculos/:id`: Retorna os detalhes de um veículo específico com base no ID.
- `POST /veiculos`: Cria um novo veículo.
- `PUT /veiculos/:id`: Atualiza os detalhes de um veículo existente com base no ID.
- `DELETE /veiculos/:id`: Exclui um veículo com base no ID.

A estrutura de um objeto de veículo é a seguinte:

```json
{
 "id": "cd99557a-8750-463e-a3fa-7f7bd9ecf37a",
 "locadora": "Teste",
 "modelo": "Teste",
 "marca": "Teste",
 "ano": 2022,
 "motor": "1.0",
 "portas": 2,
 "cambio": "Manual",
 "ar_condicionado": true,
 "updatedAt": "2023-10-23T14:37:35.917Z",
 "createdAt": "2023-10-23T14:37:35.917Z"
}
```

## Considerações Finais
Este projeto é uma demonstração simples de um sistema de gerenciamento de veículos para uma locadora de carros. Ele utiliza tecnologias populares do ecossistema Node.js e MySQL. Sinta-se à vontade para explorar o código-fonte e personalizá-lo conforme necessário. Se tiver alguma dúvida ou encontrar problemas, não hesite em entrar em contato.