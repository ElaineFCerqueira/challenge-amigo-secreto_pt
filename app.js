//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Meu Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}

exibirMensagemInicial();


/////////////////////////////////FUNÇÃO PARA ADICIONAR AMIGO NA LISTA///////////////////

let listaamigo = []; //criar um array para armazenar os nomes



function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    console.log(nome)
        
    if (nome == '') {
        alert('Digite um nome! ') // caso o campo esteja vazio
        
    } else {
        listaamigo.push(nome) // para incluir o nome a lista
        console.log(listaamigo)
        limparCampo()
        amigosListados();
    }
}

//////////////////////Função para limpar o campo ////////////////////

function limparCampo() {
        document.querySelector('input').value = '';
}


//////////////////////Função para Listar Nomes ////////////////////
function amigosListados(){
    let lista = document.getElementById('listaAmigos') // Obter o elemento da lista
    lista.innerHTML = "" //para selecionar a lista onde os amigos serão exibidos no HTML

    for (let i = 0; i < listaamigo.length; i++) {
        lista.innerHTML += `<li>${listaamigo[i]}</li>`; // Adiciona cada nome como item de lista
    }    
}

////////////////////FUNÇÃO PARA SORTEAR AMIGO ///////////////////////////
function sortearAmigo() {
    let resultado = document.querySelector('input').value;// Elemento onde será exibido o nome sorteado
  
    if (listaamigo.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * listaamigo.length); // Gera índice aleatório
        let nomeSorteado = listaamigo[indiceAleatorio]; // Pega o nome correspondente ao índice
        resultado.innerHTML = nomeSorteado//`🎉 O amigo secreto é: ${nomeSorteado}`; // Exibe o nome sorteado
        responsiveVoice.speak(`Seu amigo secreto é ${nomeSorteado}`, 'Brazilian Portuguese Female', {rate:1.2});
        

    } else {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
    }
}

