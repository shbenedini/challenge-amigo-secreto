//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// função para agregar amigos
function adicionarAmigo() {
    amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
    }
    document.getElementById('amigo').value = '';
    mostraListaAmigos();
}

// função para atualizar a lista de amigos
function mostraListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

