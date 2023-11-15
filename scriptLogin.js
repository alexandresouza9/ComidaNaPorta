function enviarEmail() {
           
    alert('Email enviado com sucesso!');
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("cadastroForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            var usuario = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;

            // Exemplo de verificação simples (substitua pelo seu mecanismo de autenticação):
            if (usuario === "alexandresouza9@gmail.com" && senha === "ass2510") {
                window.location.href = "index.html"; // Redireciona para o index.html
            } else {
                alert("Usuário ou senha incorretos. Tente novamente.");
            }
        });
    });