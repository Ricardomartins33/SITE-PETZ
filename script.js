

document.addEventListener("DOMContentLoaded", () => {

    const menuCachorro = document.querySelector(".item > a");
    const submenu = document.querySelector(".submenu");

    menuCachorro.addEventListener("click", function(e) {

        e.preventDefault();
        e.stopPropagation();

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }

        console.log("submenu clicado");
    });

    document.addEventListener("click", function() {
        submenu.style.display = "none";
    });

});

function filtrarProdutos(categoria ) {  
     

    const produtos = document.querySelectorAll(".box-content-premium, .box-content-racao, .box-content-brinquedo, .box-content-acessorio");

    produtos.forEach(produto => {

        if (produto.classList.contains(categoria)) {
            produto.style.display = "flex";
        } else {
            produto.style.display = "none";
        }

    });

    document.querySelectorAll(".submenu").forEach(menu => {
        menu.style.display = "none";
    });
    console.log(document.querySelector(".box-content-racao"));
}
function carregarProdutos(arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(html => {
            const areaProdutos = document.getElementById('area-produtos');
            const titulo = document.getElementById("titulo-pagina");
const servicos = [
    "banho-tosa",
    "atendimento-veterinario",
    "adestramento",
    "entrega-rapida"
];

const ehServico = servicos.some(servico => arquivo.includes(servico));

titulo.textContent = ehServico ? "Serviços" : "Produtos";
            areaProdutos.innerHTML = html;
          
const botao = document.getElementById("btn-whatsapp");

if (botao) {
    botao.addEventListener("click", () => {
        window.open("https://wa.me/5511987654321", "_blank");
    });
}
            setTimeout(() => {
                window.scrollTo({
                    top: areaProdutos.offsetTop - 180,
                    behavior: 'smooth'
                });
            }, 300);
        })
        .catch(error => {
            console.error('Erro ao carregar produtos:', error);
        });
}
let produtosOriginais = "";

window.onload = function() {
    produtosOriginais = document.getElementById("area-produtos").innerHTML;
}
function mostrarTodosProdutos() {
    document.getElementById("area-produtos").innerHTML = produtosOriginais;
}
document.querySelectorAll('.menu > .item > a').forEach(el => {
    el.addEventListener('click', e => e.preventDefault());
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let contador = 0;

function trocarImagem(){

    contador++;

    if(contador >= slides.length){
        contador = 0;
    }

    slider.style.transform = `translateX(-${contador * 100}%)`;

}

setInterval(trocarImagem, 3000);