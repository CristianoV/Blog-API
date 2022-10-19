<h1 align="center">
Projeto Blogs API project!
<h1/>

# Contexto
 Esse projeto é um CRUD que se conecta a um banco de dados MySQL para criar posts e usuários de um Blog.  Para isso é utilizado de diversas ferramentas e implementado a arquitetura __MSC__.

# Tecnologias, bibliotecas e arquiteturas usadas
  * __MySQL__
  * __Sequelize__
  * __Node.js__
  * __Express__
  * __Nodemon__
  * __Joi__
  * __Jwt__
  * __MSC__
  * __REST__

# Instruções da aplicação
### Instalar dependências
```
cd Blogs-API
npm install
```
  
### Rodar aplicação sem Docker
```
cd Blogs-API
npm run debug
```

### Rodando aplicação com Docker
```
cd Blogs-API
npm run compose-up
npm run iniciate-server
```

### login de usuario Cadastrado
```
exemplo: 
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
