let amigos = [];

function adicionar() {
    let inputAmigo = document.getElementById('nome-amigo');
    let nome = inputAmigo.value.trim();

    // Validação: campo vazio
    if (nome === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    // Validação: nome repetido
    if (amigos.includes(nome)) {
        alert('Nome já adicionado,por favor digite outro nome!');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida na tela (ID correto: 'lista-amigos')
    let lista = document.getElementById('lista-amigos');
    if (lista.textContent === '') {
        lista.textContent = nome;
    } else {
        lista.textContent = lista.textContent + ', ' + nome;
    }

    // Limpa o campo de input
    inputAmigo.value = '';
}  

function sortear() {
    // Validação para impedir o sorteio se houver menos de 4 pessoas
    if (amigos.length < 4) {
        alert('Informe pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    // Cria uma cópia do array para embaralhar sem perder a ordem original
    let amigosEmbaralhados = [...amigos];
    embaralhar(amigosEmbaralhados);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    // Cria os pares do amigo secreto (quem tira quem)
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        if (i === amigosEmbaralhados.length - 1) {
            sorteio.innerHTML += amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}