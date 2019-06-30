<template>
<div class="container">
  <div class="row">
    <div class="col-sm text-clojure-dark-blue">
      <p class="text-justify">
        Você sempre quis aprender Clojure mas, por qualquer motivo, prefere um material em Português? E se, além de estar no seu idioma preferido, ele ainda for tão bom quanto os melhores livros em Inglês e o mais completo em Português?
      </p>
      <p class="text-justify">
        Seria excelente, não?
      </p>
      <p class="text-justify">
        Depois de mais tempo do que eu gostaria, estou disponibilizando o conteúdo do meu livro gratuitamente e online para que você possa entender, aprender e se tornar um programador Clojure. Ou simplesmente se tornar um melhor programador em qualquer linguagem que você prefira usar, apenas por ter aprendido práticas de programação funcional.
      </p>
      <p class="text-justify">
        Caso você prefira ler no conforto do seu leitor de e-books, em breve vou disponibilizar o conteúdo neste formato. Ou, caso você prefira o bom e velho livro em papel, também em breve você poderá adquirí-lo através da Amazon.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm mr-1 text-clojure-dark-blue">
      <a name="toc" />
      <h3>Quero ler online</h3>
      <ol>
      <li>Sobre a versão online</li>
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
    <div class="col-sm-3 text-clojure-dark-blue">
      <h3>Quero o livro</h3>
        <p>
          <img class="img-fluid img-cover" src="img/cover.png">
        </p>
        <p>
        Quer comprar ou baixar? Aguarde.
        </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>
