// Get all buttons from the HTML
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn = document.getElementById("btn");
let btn_publicar = document.querySelector(".btn_publicar");
let ver_todas_buttons = document.querySelectorAll(".ver_todas");

// Button 1 - Entrar
btn1.addEventListener("click", function() {
    const searchText = document.getElementById('search').value;
    const selectedProvince = document.getElementById('provincias').value;
});

// Button 2 - Criar Conta
btn2.addEventListener("click", function() {
    const searchText = document.getElementById('search').value;
    const selectedProvince = document.getElementById('provincias').value;
});

// Button - Pesquisar Vagas
btn.addEventListener("click", function() {
    const searchText = document.getElementById('search').value;
    const selectedProvince = document.getElementById('provincias').value;
});

// Button - Publicar Vagas agora
if (btn_publicar) {
    btn_publicar.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
    });
}

//"Ver todas" buttons
ver_todas_buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
    });
});
// (Explore por categoria section)
let categoriaCards = document.querySelectorAll(".card_categoria");
categoriaCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
    });
});

//(Vagas em destaque section)
let jobCards = document.querySelectorAll(".card_destaque");
jobCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
    });
});

// (Últimas Vagas Abertas section)
let vagaCards = document.querySelectorAll(".card_vaga");
vagaCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
      });
});

// 
let tagButtons = document.querySelectorAll(".tag");
tagButtons.forEach(function(tag) {
    tag.addEventListener("click", function() {
        const searchText = document.getElementById('search').value;
        const selectedProvince = document.getElementById('provincias').value;
        const tagText = this.innerText;
    });
});