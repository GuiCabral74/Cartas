const deck = document.querySelector("section");
const ativar = document.querySelector(".ativo");
const body = document.querySelector("body");

console.log(deck);


var elementoAtual = document.getElementsByTagName("div");


Array.prototype.slice.call(elementoAtual).forEach(function (pegaElementoAtual) {
    pegaElementoAtual.addEventListener('click', function (e) {
        this.classList.toggle("ativo");
    });
    pegaElementoAtual.style.cursor = "pointer";

});

