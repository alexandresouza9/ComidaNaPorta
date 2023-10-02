document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCadastro")
  const username = document.getElementById("username")
  const email = document.getElementById("email")
  const rua = document.getElementById("rua")
  const numero = document.getElementById("numero")
  const cidade = document.getElementById("cidade")
  const estado = document.getElementById("estado")
  const cep = document.getElementById("cep")
  const phone = document.getElementById("phone")
  const password = document.getElementById("password")
  const passwordconfirmation = document.getElementById("password-confirmation")


  form.addEventListener("submit", function (event) {
    event.preventDefault()
    checkInputUsername();
    
    var previousPageURL = document.referrer // Obtém a URL da página anterior
    window.location.href = previousPageURL // Redireciona para a página anterior
  })
})
function checkInputUsername(){
  const usernameValue = username.value;
  if(usernameValue === ""){
    // mostrar o aviso de erro...
    
  }
}
