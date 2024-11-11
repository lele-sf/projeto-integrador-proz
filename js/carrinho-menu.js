document.addEventListener("DOMContentLoaded", function() {
    let item = document.getElementById("itemProduto");
    let span = document.getElementsByClassName("close")[0];
    let btnAddToCart = document.getElementById("btnAddToCart");
    let cart = {};

    // Função para abrir item com informações do produto
    document.querySelectorAll(".btn-add").forEach(function(btn) {
        btn.onclick = function() {
            let produto = this.closest(".produto");
            document.getElementById("produtoImg").src = produto.querySelector("img").src;
            document.getElementById("produtoNome").innerText = produto.querySelector("p:first-of-type").innerText;
            document.getElementById("produtoDescricao").innerText = "Descrição do produto"; // posso fazer alterações sem prejudicar o código conforme necessidades
            document.getElementById("produtoPreco").innerText = produto.querySelector("p:nth-of-type(2)").innerText;
            item.style.display = "block";
        };
    });

    // Função para fechar o item
    span.onclick = function() {
        item.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === item) {
            item.style.display = "none";
        }
    };

    // Função para adicionar ao carrinho e renderizar
    btnAddToCart.onclick = function() {
        let produtoNome = document.getElementById("produtoNome").innerText;
        let produtoPreco = parseFloat(document.getElementById("produtoPreco").innerText.replace('R$', '').replace(',', '.'));
        if (!cart[produtoNome]) {
            cart[produtoNome] = { quantidade: 1, preco: produtoPreco };
        } else {
            cart[produtoNome].quantidade++;
        }
        item.style.display = "none";
        document.getElementById("cart").style.display = "block"; // Exibe o carrinho
        renderCart();
    };

    // Função para renderizar o carrinho
    function renderCart() {
        let cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = "<h2>Seu Carrinho</h2>";
        let subtotal = 0;
        for (let produto in cart) {
            subtotal += cart[produto].quantidade * cart[produto].preco;
            let item = document.createElement("div");
            item.className = "cart-item";
            item.innerHTML = `
                <span>${produto}</span>
                <span class='btn-carrinho'>                
                <button class="btn-decrease">-</button>
                ${cart[produto].quantidade}
                <button class="btn-increase">+</button>
                </span>                  
            `;
            cartDiv.appendChild(item);
        }
        let subtotalDiv = document.createElement("div");
        subtotalDiv.className = "subtotal";
        subtotalDiv.innerHTML = 
        `<h3>Total: R$ ${subtotal.toFixed(2).replace('.', ',')}</h3>`;
        cartDiv.appendChild(subtotalDiv);

        // Adiciona o botão de finalizar compra
        let checkoutButton = document.createElement("button");
        checkoutButton.id = "btnCheckout";
        checkoutButton.className = "btnCheckout";
        checkoutButton.innerText = "Finalizar Compra";
        checkoutButton.onclick = function() {
            // Código para finalizar a compra
            alert("Compra finalizada!");
            cart = {}; // Limpa o carrinho
            document.getElementById("cart").style.display = "none"; // Esconde o carrinho
        };
        cartDiv.appendChild(checkoutButton);

        // Funções para aumentar e diminuir a quantidade
        document.querySelectorAll(".btn-increase").forEach(function(btn) {
            btn.onclick = function() {
                let produto = this.closest(".cart-item").querySelector("span:first-of-type").innerText;
                cart[produto].quantidade++;
                renderCart();
            };
        });
        document.querySelectorAll(".btn-decrease").forEach(function(btn) {
            btn.onclick = function() {
                let produto = this.closest(".cart-item").querySelector("span:first-of-type").innerText;
                if (cart[produto].quantidade > 1) {
                    cart[produto].quantidade--;
                } else {
                    delete cart[produto];
                }
                renderCart();
            };
        });
              
    };
    
});

