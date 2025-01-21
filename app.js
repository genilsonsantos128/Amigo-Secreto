//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declarar um array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    document.getElementById("nome").value = "";
    atualizarLista();
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerText = `O amigo secreto é: ${amigoSorteado}`;
}
