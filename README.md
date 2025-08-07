# 🎁 Projeto Amigo Secreto

Este projeto foi desenvolvido com o objetivo de **fortalecer habilidades em lógica de programação**, utilizando JavaScript para criar uma aplicação interativa de sorteio de amigo secreto.

## 🧠 Objetivo

O principal desafio aqui é aplicar conceitos de:
- Arrays e estruturas de repetição
- Validação de entrada
- Geração de busca aleatória
- Interação por voz com `responsiveVoice`

## 🚀 Funcionalidades

- ✅ Adicionar nomes à lista de participantes
- ✅ Exibir os nomes adicionados em tempo real
- ✅ Sortear aleatoriamente um amigo secreto
- ✅ Exibir e falar o nome sorteado com voz sintetizada

## 📦 Estrutura do Código

### `exibirTextoNaTela(tag, texto)`
Exibe um texto em uma tag HTML específica e utiliza `responsiveVoice` para falar o conteúdo.

### `exibirMensagemInicial()`
Mostra a mensagem de boas-vindas e instruções iniciais.

### `adicionarAmigo()`
Adiciona o nome digitado à lista de amigos, valida se o campo está vazio e atualiza a lista exibida.

### `limparCampo()`
Limpa o campo de entrada após adicionar um nome.

### `amigosListados()`
Renderiza os nomes dos amigos adicionados em uma lista HTML.

### `sortearAmigo()`
Realiza o sorteio aleatório de um nome da lista e exibe o resultado com voz.

## 🛠 Tecnologias Utilizadas

- HTML
- CSS (opcional para estilização)
- JavaScript
- [ResponsiveVoice](https://responsivevoice.org/) para síntese de voz

## 📌 Como Usar

1. Digite o nome de cada participante e clique em "Adicionar".
2. Após listar todos os amigos, clique em "Sortear".
3. O nome sorteado será exibido e falado em voz alta.

## 💡 Melhorias Futuras

- Evitar que o sorteado seja ele mesmo
- Sortear pares secretos para todos os participantes
- Exportar lista de sorteio
- Adicionar animações e estilo visual

---

