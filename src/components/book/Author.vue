<template>
  <page>
    <div class="col-sm text-clojure-dark-blue">
      <h1>Sobre o autor</h1>

      <p class="text-justify">Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há cinco, é casado com a Roberta e pai de Gustavo, Mariana e Duda. É autor do livro <i>Dominando JavaScript com jQuery</i>[ref dominando-js], publicado pela Editora Casa do Código.</p>

      <p class="text-justify">É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.</p>

      <p class="text-justify">No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.</p>

      <img class="img-fluid img-cover" :src="'./img/autor.jpg'" alt="Autor falando sobre Clojure na QCon SP 2013" />
    </div>
  </page>
</template>

<script>
export default {
  name: 'Author'
}
</script>
