SELECT * FROM Cliente;
SELECT * FROM Produto;

-- pedidos dos clientes com detalhe
SELECT 
    p.PedidoID, 
    c.Nome AS ClienteNome, 
    p.DataPedido, 
    pr.Nome AS ProdutoNome, 
    ip.Quantidade, 
    ip.Preco
FROM Pedido p
JOIN Cliente c ON p.ClienteID = c.ClienteID
JOIN ItemPedido ip ON p.PedidoID = ip.PedidoID
JOIN Produto pr ON ip.ProdutoID = pr.ProdutoID;

-- total gasto por cliente
SELECT 
    c.Nome AS ClienteNome, 
    SUM(p.ValorTotal) AS TotalGasto
FROM Pedido p
JOIN Cliente c ON p.ClienteID = c.ClienteID
GROUP BY c.Nome;

-- pedido específico de um cliente
SELECT 
    p.PedidoID, 
    p.DataPedido, 
    pr.Nome AS ProdutoNome, 
    ip.Quantidade, 
    ip.Preco
FROM Pedido p
JOIN ItemPedido ip ON p.PedidoID = ip.PedidoID
JOIN Produto pr ON ip.ProdutoID = pr.ProdutoID
WHERE p.ClienteID = 1;
-- resumo de pedidos
SELECT 
    COUNT(p.PedidoID) AS TotalPedidos, 
    SUM(p.ValorTotal) AS ReceitaTotal
FROM Pedido p;