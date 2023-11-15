function validaForm() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha === confirmarSenha) {
        return true; // Senhas coincidem
    } else {
        alert("As senhas não coincidem. Por favor, digite novamente.");
        return false; // Senhas não coincidem, impedir o envio do formulário
    }
}


function buscaCep(){

const cep = document.getElementById("cep").value;

// Formata o CEP para remover caracteres não numéricos
const cepFormatado = cep.replace(/\D/g, '');


if(cepFormatado.length==8){

// Faz a solicitação à API do ViaCEP
  fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`)
      .then(response => response.json())
      .then(data => {
          if (!data.erro) {
              // Preenche os campos de endereço com os dados da API
              document.getElementById("endereco").value = data.logradouro;
              document.getElementById("bairro").value = data.bairro;
              document.getElementById("cidade").value = data.localidade;
              document.getElementById("estado").value = data.uf;
          } else {
              alert("CEP não encontrado.");
          }
      })
      .catch(error => {
          console.error("Erro ao buscar CEP:", error);
      });

}
}
