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
    <ToC />
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
import ToC from './book/ToC.vue'

export default {
  name: 'HomeContent',
  components: {
    ToC
  }
}
</script>
