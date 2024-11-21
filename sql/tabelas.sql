CREATE TABLE Cliente (
    ClienteID INTEGER PRIMARY KEY autoincrement,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    Endereco VARCHAR(255) NOT NULL
);

CREATE TABLE Produto (
    ProdutoID INTEGER PRIMARY KEY autoincrement,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT NOT NULL,
    Preco DECIMAL(10, 2) NOT NULL,
    Categoria VARCHAR(50) NOT NULL
);

CREATE TABLE Pedido (
    PedidoID INTEGER PRIMARY KEY autoincrement,
    ClienteID INT NOT NULL,
    DataPedido DATE NOT NULL,
    ValorTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

CREATE TABLE ItemPedido (
    ItemPedidoID INTEGER PRIMARY KEY autoincrement,
    PedidoID INT NOT NULL,
    ProdutoID INT NOT NULL,
    Quantidade INT NOT NULL,
    Preco DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PedidoID) REFERENCES Pedido(PedidoID),
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID)
);