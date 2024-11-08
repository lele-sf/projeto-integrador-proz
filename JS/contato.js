// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Seleciona os campos do formulário
    const nome = document.getElementById("Nome");
    const sobrenome = document.getElementById("Sobrenome");
    const email = document.getElementById("Seu melhor email");
    const telefone = document.getElementById("telefone");

    // Limpa mensagens de erro anteriores
    limparErros();

    let formularioValido = true;

    // Valida o campo Nome
    if (nome.value.trim() === "") {
        mostrarErro(nome, "Por favor, insira seu nome.");
        formularioValido = false;
    }

    // Valida o campo Sobrenome
    if (sobrenome.value.trim() === "") {
        mostrarErro(sobrenome, "Por favor, insira seu sobrenome.");
        formularioValido = false;
    }

    // Valida o campo Email
    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        mostrarErro(email, "Por favor, insira um e-mail válido.");
        formularioValido = false;
    }

    
    // Valida o campo Telefone
    if (!telefone.value.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) {
        mostrarErro(telefone, "Por favor, insira um telefone válido. Ex: (99) 99999-9999");
        formularioValido = false;
    }

    // Se todos os campos forem válidos, envie o formulário
    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        document.querySelector("form").submit();
    }
}

// Função para mostrar mensagens de erro
function mostrarErro(campo, mensagem) {
    const erro = document.createElement("span");
    erro.className = "erro";
    erro.innerText = mensagem;
    campo.parentNode.insertBefore(erro, campo.nextSibling);
}

// Função para limpar mensagens de erro
function limparErros() {
    const erros = document.querySelectorAll(".erro");
    erros.forEach(erro => erro.remove());
}

// Adiciona o evento de validação ao botão de enviar
document.querySelector("form").addEventListener("submit", validarFormulario);
