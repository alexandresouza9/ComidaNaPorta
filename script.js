document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCadastro")
  const username = document.getElementById("username").value
  const email = document.getElementById("email").value
  const rua = document.getElementById("rua")
  const numero = document.getElementById("numero")
  const cidade = document.getElementById("cidade")
  const estado = document.getElementById("estado")
  const cep = document.getElementById("cep")
  const phone = document.getElementById("phone")
  const password = document.getElementById("password")
  const passwordconfirmation = document.getElementById("password-confirmation")


  document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
  
  
    const dados = { nome, email };
  
    // Armazena os dados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));
  
    alert('Dados do formulário salvos localmente.');
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    checkForm();
    
    var previousPageURL = document.referrer // Obtém a URL da página anterior
    window.location.href = previousPageURL // Redireciona para a página anterior
  })
  email.addEventListener("blur", () => {
    checkInputEmail();
  })

  username.addEventListener("blur", () => {
    checkInputUsername();
  })
  
})
function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    // mostrar o aviso de erro...
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.classList = "form-content"
  }
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;
  formItem.className = "form-content error"
}

