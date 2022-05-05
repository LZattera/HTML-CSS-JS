let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let formulario-procur = document.querySelector('.menu-itens-carrinho');

document.querySelector('#cart-btn').onclick = () => {
    formulario-procur.classList.toggle('active');
}

let itemcarrinho = document.querySelector('.menu-itens-carrinho');

document.querySelector('#cart-btn').onclick = () => {
    itemcarrinho.classList.toggle('active');
}
