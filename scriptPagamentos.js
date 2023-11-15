// Selecionar todos os botões de diminuir a quantidade
const decreaseButtons = document.querySelectorAll(".decrease-quantity");

// Selecionar todos os botões de aumentar a quantidade
const increaseButtons = document.querySelectorAll(".increase-quantity");

// Selecionar todos os campos de quantidade
const quantityInputs = document.querySelectorAll(".quantity");

// Selecionar todos os botões de remover do carrinho
const removeButtons = document.querySelectorAll(".remove-from-cart");

// Selecionar o elemento que exibe o total
const totalElement = document.querySelector(".mb-3");



// Adicionar eventos aos botões de diminuir quantidade
decreaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Verificar se a quantidade é maior que 1 antes de decrementar
    if (quantityInputs[index].value > 1) {
      quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
      updateTotal();
    }
  });
});

// Adicionar eventos aos botões de aumentar quantidade
increaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Incrementar a quantidade
    quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
    updateTotal();
  });
});

// Adicionar eventos aos botões de remover do carrinho
removeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remover o elemento pai da linha atual
    button.closest(".col").remove();
    updateTotal();
    // Redirecionar para a página de cardápio se o carrinho estiver vazio
    if (document.querySelectorAll(".col").length === 0) {
      window.location.href = "index.html";
    }
  });
});

// Função para atualizar o total
function updateTotal() {
  let total = 0;
  quantityInputs.forEach((input, index) => {
    // Obter o preço unitário do item
    const unitPrice = parseFloat(
      input.closest(".card-body").querySelector(".mb-1").textContent.replace("Valor Unitário: R$ ", "")
    );

    // Calcular o novo total
    total += unitPrice * parseInt(input.value);

    // Atualizar o valor total exibido para o item
    input.closest(".card-body").querySelector(".mb-0").textContent = `Valor Total: R$ ${unitPrice * parseInt(input.value)}`;
  });

  // Atualizar o valor total geral exibido na página
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
const finalizeButton = document.getElementById("finalize-button");
finalizeButton.addEventListener("click", () => {
  alert("Compra finalizada com sucesso!"); 
  window.location.href = "index.html";
});
// Selecionar o botão de cancelar
const cancelButton = document.getElementById("cancel-button");

// Adicionar evento ao botão de cancelar para redirecionar para a página de cardápio
cancelButton.addEventListener("click", () => {
  window.location.href = "index.html";
});


