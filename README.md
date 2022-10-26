## 🗡 Projet Trybesmith

## ✏ Sobre o projeto
O objetivo do projeto, foi criar uma loja de itens medievais, no formato de uma API, utilizando Typescript!
</br>
A aplicação foi desenvolvida em <strong>Node.js e TypeScript</strong>, utilizando a <strong>arquitetura MSC</strong> - Model, Service, Controller -, juntamente a <strong>SQL</strong> para realizar o CRUD dos itens.
Para realizar as validações de entrada, foi utilizados a biblioteca <strong>JOI</strong> e para a geração e autenticação de token foi utilizado o JSON Web Token - <strong>JWT</strong>.

## 📋 Execute o projeto em sua máquina

Clone o repositório:

```
git@github.com:BrunoPelegrino/trybesmith.git
```
<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.
  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  > Instale as dependências [**Caso existam**] com `npm install`
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

   ⚠ Atenção ⚠ Caso você esteja usando macOS e ao executar o `docker-compose up -d` se depare com o seguinte erro:

  ~~~bash
  The Compose file './docker-compose.yml' is invalid because:
  Unsupported config option for services.db: 'platform'
  Unsupported config option for services.node: 'platform'
  ~~~

> Foram encontradas 2 possíveis soluções para este problema:
> 1. Você pode adicionar manualmente a option `platform: linux/amd64` no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
> 2. Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha `export DOCKER_DEFAULT_PLATFORM=linux/amd64`, essa é uma solução global.
> As soluções foram com base [nesta fonte](https://stackoverflow.com/a/69636473).


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

## 👨🏻‍💻 Habilidades

- Criar uma API RESTful utilizando a arquitetura MSC (Model-Service-Controller);
- Utilizar o banco de dados com o MySQL.
- Criar uma aplicação utilizando TypeScript
- Validar dados das requisições com a biblioteca Joi.

## 🔎 Rotas

### Login

<details>
  <summary><strong>POST /login</strong></summary>
  </br>
  • Se o login for feito com sucesso retorna um token para o usuário.
  </br>
  • O endpoint deve receber a seguinte estrutura:
  
```json
  {
    "username": "string",
    "password": "string"
  }
```
</details>

### Product

<details>
  <summary><strong>POST /products</strong></summary>
  </br>
  • Cadastra um novo produto.
  </br>
  • O endpoint deve receber a seguinte estrutura:
  
  ```json
    {
      "name": "string",
      "amount": "string"
    }
  ```
</details>

<details>
  <summary><strong>GET /products</strong></summary>
  </br>
  • Retorna todos os produtos do banco de dados.
</details>

### User

<details>
  <summary><strong>POST /users</strong></summary>
  </br>
  • Cadastra um novo usuário.
   </br> 
  • O endpoint deve receber a seguinte estrutura:
  
  ```json
  { 
    "username": "string",
    "classe": "string",
    "level": "number",
    "password": "string"
  }
```
</details>

### Order

<details>
  <summary><strong>GET /orders</strong></summary>
  </br>
  • Retorna todos os pedidos e os ids dos produtos associados a estes.
</details>

<details>
  <summary><strong>POST /orders</strong></summary>
  </br>
  • Cadastra novos pedidos.
  </br>
  • O pedido só é criado caso a pessoa usuária esteja logada e o token JWT validado.
  </br>
  • O endpoint deve receber a seguinte estrutura:
  
```json
  {
    "productsIds": [1, 2]
  }
```
</details>

## 🛠️ Ferramentas & Metodologias Utilizadas

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MySQL](https://www.mysql.com/);
- [mysql2](https://www.npmjs.com/package/mysql2);
- [JWT(Autenticação)](https://jwt.io/);
- [Joi](https://joi.dev/api/?v=17.6.0);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);

---
⌨️ desenvolvido por [Bruno Pelegrino](https://www.linkedin.com/in/bruno-pelegrino/)
