<template>
  <div class="jumbotron jumbotron-fluid bg-secondary text-light">
    <div class="container">
      <h4>O autor</h4>
      <p class="lead">Plínio Balduino </p>

      <p>Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há dez, é casado com Roberta e pai de Gustavo, Mariana e Duda. É autor do livro Dominando JavaScript com jQuery, publicado pela Editora Casa do Código.</p>
      <p>É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.</p>
      <p>No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.</p>

      <hr />

      <h5>Licenças e direitos autorais</h5>

      <p><small>Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.</small></p>
      <p><small>Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.</small></p>
      <p><small>Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.</small></p>
      <Version />
    </div>
  </div>
</template>

<script>
import Version from './Version.vue';

export default {
  name: 'BigFooter',
  components: {
    Version
  }
}
</script>
