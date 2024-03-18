
# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.


## Funcionalidades

- Listagem de clientes
- Adição de novo cliente
- Edição de cliente
- Verificação de formação e alertas no preenchimento de campos


## Demonstração
![Criação de usuario](/exemplo1.gif)
![Alertas na criação e edição](/exemplo2.gif)




## Rodando os testes

Para rodar os testes, rode o seguinte comando no back-end ou no front-end

```bash
  npm test
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env do back-end

```bash
  PORT
  MYSQLHOST
  MYSQLPORT
  MYSQLUSER
  MYSQLPASSWORD
  MYSQLDATABASE
```
e no front-end

```bash
VITE_HOST
VITE_PROTOCOL
PORT
```


## Instalação

Crie um container utilizando Docker para o mysql

```bash
  docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password -d mysql
```

No diretorio do projeto, mude de path para back-end

```bash
  cd back-end/
```
Instale as dependencias
```bash
  npm i
```
Migre as migrations e preenchaa database
```bash
  npm run db:reset
```
Inicie o back-end
```bash
  npm run dev
```
Vá para o diretório do front-end
```bash
  cd ../front-end/
```
Instale as dependencias
```bash
  npm i
```
Inicie a aplicação
```bash
  npm run dev
```