# Projeto Estoque - CRUD Angula + Node

## Sistema desenvolvido em:
* Angular 
* Nodejs 
* Express 
* MySQL

## Back-End
### Comandos
```shell
# Instalar dependencias
npm install

# Iniciar sistema
nodemon serve

```

## Front-End

```shell
# Instalar dependencias 
npm install

#Inicar ng server
ng serve
```

## Banco de dados
### Credenciais do banco
```shell
    host:'localhost',
    user:'SEU USERNAME',
    password:'SUA SENHAS',
    database:'db_products',
    port:3306
```

### Criação de banco
```shell
CREATE DATABASE  IF NOT EXISTS `db_products`;
USE `db_products`;

--
-- Table structure for table `produts`
--

CREATE TABLE `produts` (
  `idprodut` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `img` longtext NOT NULL,
  `description` varchar(2000) NOT NULL,
  `inventory` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `value` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idprodut`)
);
```
