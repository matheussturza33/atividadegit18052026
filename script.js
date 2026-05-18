// Seleciona elementos
const botao = document.getElementById("btn");
const texto = document.getElementById("texto");

// Evento de clique
botao.addEventListener("click", () => {
    texto.innerHTML = "Botão clicado com sucesso!";
    texto.style.color = "blue";
});

// Função simples
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Usuário"));