const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");



botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        selecionarBotao(botao);

        selecionarPersonagem(index);

    });
    
});

function selecionarPersonagem(index) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");

    personagens[index].classList.add("selecionado");
}

function selecionarBotao(botao) {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");
}

