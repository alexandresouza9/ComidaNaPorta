document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");

    // Array para armazenar os itens no carrinho
    const cart = [];

    // Função para adicionar um produto ao carrinho
    function addToCart(productName, productImage) {
        const item = {
            name: productName,
            image: productImage,
        };
        cart.push(item);
        renderCart();
    }

    // Função para renderizar o carrinho na página
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>O carrinho está vazio.</p>";
        } else {
            cart.forEach((item) => {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <span>${item.name}</span>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
    }

    // Event listener para os botões "Adicionar"
    const addButtons = document.querySelectorAll(".btn btn-primary");
    addButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const cardTitle = document.querySelectorAll(".card-title")[index].textContent;
            const cardImage = document.querySelectorAll(".card-img-top")[index].src;
            addToCart(cardTitle, cardImage);
        });
    });
});
