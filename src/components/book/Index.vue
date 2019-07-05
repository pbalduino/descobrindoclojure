<template>
<div class="col-sm mr-1 text-clojure-dark-blue">
  <a name="toc" />
  <h3>Quero ler online</h3>
  <ol>
  <li><router-link to="/online">Sobre a versão online</router-link></li>
  <li>Introdução</li>
  <ul>
    <li><router-link to="/dedication">Dedicatória</router-link></li>
    <li>Prefácio</li>
    <li>Agradecimentos</li>
    <li><a href="book/sobre_o_autor.html">Sobre o autor</a></li>
    <li>Aviso</li>
  </ul>
  <li>Apresentação</li>
  <ul>
    <li>Por que Clojure?</li>
    <li>Para quem é esse livro</li>
    <li>Como o livro está organizado</li>
    <li>Lista de discussão e código fonte</li>
  </ul>
  <li>Uma introdução gentil ao Clojure</li>
  <ul>
    <li>O que é Clojure?</li>
    <li>Configurando o ambiente</li>
    <li>Explicando a sintaxe</li>
    <li>Explicando os parênteses</li>
  </ul>
  <li>O REPL é tão importante...</li>
  <ul>
    <li>...que merece um capítulo a parte</li>
    <li>Alguns truques rápidos com o REPL</li>
    <li>Desenvolvimento baseado no REPL</li>
    <li>Criando uma aplicação de exemplo</li>
    <li>Modificando a aplicação através do REPL</li>
  </ul>
  <li>Descobrindo o poder das funções</li>
  <li>Dados e metadados</li>
  <li>Namespaces para organizar o código</li>
  <li>Calculando o infinito com lazy sequences</li>
  <li>Integrando Clojure com Java</li>
  <li>Concorrência e multithreading</li>
  <li>Estendendo a linguagem com macros</li>
  <li>Dicas para um bom desenvolvimento em Clojure</li>
  <li>Onde aprender mais</li>
</ol>
E vem muito mais por aí
</div>
</template>

<script>

export default {
  name: 'Index'
}
</script>
