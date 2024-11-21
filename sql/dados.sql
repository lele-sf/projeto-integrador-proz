INSERT INTO Cliente (Nome, Email, Telefone, Endereco)
VALUES ('Maria Silva', 'maria@email.com', '555-1234', 'Rua Exemplo 123'),
       ('João Medeiros', 'joao@email.com', '567-8912', 'Rua Exemplo 321');

INSERT INTO Produto (Nome, Descricao, Preco, Categoria)
VALUES ('Café Expresso', 'Café puro e forte', 5.00, 'Bebida'),
       ('Bolo de Chocolate', 'Bolo feito com chocolate belga', 20.00, 'Doce');

INSERT INTO Pedido (ClienteID, DataPedido, ValorTotal)
VALUES (1, '2024-11-12', 25.00),
       (2, '2024-11-12', 15.00);

INSERT INTO ItemPedido (PedidoID, ProdutoID, Quantidade, Preco)
VALUES (1, 1, 2, 10.00),
       (1, 2, 1, 20.00),
       (2, 1, 1, 5.00),
       (2, 2, 1, 10.00);
