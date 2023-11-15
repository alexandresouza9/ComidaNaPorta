document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("formCadastro")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    var previousPageURL = document.referrer // Obtém a URL da página anterior
    window.location.href = previousPageURL // Redireciona para a página anterior
  })
})
