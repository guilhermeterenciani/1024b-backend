CREATE DATABASE  IF NOT EXISTS aula1;
use aula1;
CREATE TABLE pessoa (
  id int NOT NULL,
  nome varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
)
create table aula1.produto(
	  id INT PRIMARY KEY,
	  nome VARCHAR(300),
	  categoria VARCHAR(300),
	  preco DECIMAL(10,2),
	  data_criacao DATETIME,
	  data_modificacao DATETIME
  );