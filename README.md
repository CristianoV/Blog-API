<h1 align="center"> 
Projeto Blogs API project!
<h1/>

# Contexto
 Esse projeto é um CRUD que se conecta a um banco de dados MySQL para criar posts e usuários de um Blog.  Para isso é utilizado de diversas ferramentas e tecnologias implementado a arquitetura __MSC__.

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
 
 <div align="center">
 
# Instruções da aplicação


### Instalar dependências
```
cd Blogs-API
npm install
```

<!---
### Rodar aplicação sem Docker
```
cd Blogs-API
npm run debug
```
-->

### Rodando aplicação com Docker
```
cd Blogs-API
npm run compose-up
```
  
  # Rotas
| Tipo | Rota |
|--- |--- |
| Post| /login |
| Get | /post |
| Get | /post/:id |
| Get | /post/search |
| Post | /post |
| Put | /post/:id |
| Delete | /post/:id |
| Get | /categories |
| Post | /categories |
| Get | /user |
| Get | /user/:id |
| Post | /user |
| Delete | /user/me |
  
 <div/>
  
  # Login de usuario Cadastrado
```
exemplo: 
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
<p align="center">
Todas as rotas necessitam de um Header "authorization" recebido quando se faz login
Portas 3000 e 3307 sendo utilizadas
<p/>
  
<p align="center">
Portas 3000 e 3307 sendo utilizadas
<p/>
