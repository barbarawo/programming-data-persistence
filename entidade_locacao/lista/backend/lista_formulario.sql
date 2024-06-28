CREATE database lista_formulario

CREATE TABLE Cliente (
	id_cliente int NOT NULL AUTO_INCREMENT,
    nome varchar(45),
    cpf int NOT NULL,
    endereco varchar(45),
    PRIMARY KEY (id_cliente)
);

CREATE TABLE Locacao (
	id_locacao int NOT NULL AUTO_INCREMENT,
    data date,
    valor double,
    status varchar(45),
    PRIMARY KEY (id_locacao)
    );
    
SELECT * FROM Cliente

SELECT * FROM Locacao

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (1, 'BARBARA OLIVEIRA', '08726468905', 'FLORIANÓPOLIS/SC')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (2, 'ANDRÉ VIEIRA', '10020030000', 'SÃO JOSÉ/SC')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (3, 'LEONARDO PEREIRA', '20030040001', 'PALHOÇA/SC')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (4, 'THIAGO COELHO', '30040050002', 'SÃO PAULO/SP')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (5, 'ALICE CAMARGO', '40030050003', 'FLORIANÓPOLIS/SC')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (6, 'LARISSA FERREIRA', '50040060004', 'SÃO JOSÉ/SC')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (7, 'FLÁVIA GONÇALVES', '60050060007', 'RIO DE JANEIRO/RJ')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (8, 'PAULO BORGES', '70040060005', 'CAMPINAS/SP')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (9, 'ALEXANDRA SILVA', '80050070004', 'BRASÍLIA/DF')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (10, 'MARIANA SOUZA', '90040080001', 'SÃO PAULO/SP')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (11, 'FLÁVIO FAGUNDES', '10050090002', 'PORTO ALEGRE/RS')

INSERT INTO Cliente (id_cliente, nome, cpf, endereco) VALUES (12, 'RONALDO SOUZA', '20050070005', 'CURITIBA/PR')

ALTER TABLE Cliente DROP COLUMN cpf

ALTER TABLE Cliente ADD COLUMN cpf varchar(11) NOT NULL

DELETE FROM Cliente WHERE id_cliente = 1

ALTER TABLE Locacao DROP COLUMN valor

ALTER TABLE Locacao ADD COLUMN valor decimal(9,2)

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (1,'2024-01-01', '200.00', 'Concluído')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (2,'2024-01-05', '500.00', 'Concluído')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (3,'2024-01-03', '1000.00', 'Concluído')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (4,'2024-06-27', '3000.00', 'Em andamento')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (5,'2024-06-27', '200.00', 'Em andamento')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (6,'2024-06-01', '500.00', 'Concluído')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (7,'2024-06-03', '250.00', 'Cancelado')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (8,'2024-06-30', '350.00', 'Pendente')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (9,'2024-07-5', '500.00', 'Pendente')

INSERT INTO Locacao (id_locacao, data, valor, status) VALUES (10,'2024-07-30', '1000.00', 'Pendente')