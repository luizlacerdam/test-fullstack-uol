
# Teste Fullstack: Client Management App

In this challenge, I was required to develop a fullstack application that allows users to view and create customers. The application consists of two parts: the frontend and the backend. The frontend will be responsible for the user interface and communication with the API. The backend will handle the storage and management of customer data.


## Features

- Customer listing
- Adding a new customer
- Editing a customer
- Verification of training and alerts when filling in fields

## Demos
![Criação de usuario](/exemplo1.gif)
![Alertas na criação e edição](/exemplo2.gif)




## Running Tests

Run this command in back-end or front-end folders

```bash
  npm test
```


## Env

To run this project you have to create a file called .env in the back-end folder

```bash
  PORT
  MYSQLHOST
  MYSQLPORT
  MYSQLUSER
  MYSQLPASSWORD
  MYSQLDATABASE
```
and another .env file in front-end folder

```bash
VITE_HOST
VITE_PROTOCOL
PORT
```


## Installing

Create a new mysql Docker container

```bash
  docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password -d mysql
```

Go to your back-end dir

```bash
  cd back-end/
```
Install dependencies
```bash
  npm i
```
Run the migrations and seed the database
```bash
  npm run db:reset
```
Start the back-end
```bash
  npm run dev
```
change to front-end dir
```bash
  cd ../front-end/
```
Install dependencies
```bash
  npm i
```
Run front-end
```bash
  npm run dev
```
