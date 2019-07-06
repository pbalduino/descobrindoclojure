<template>
  <div>
    <LittleHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm text-clojure-dark-blue">
          <h1>Agradecimentos</h1>

          <blockquote class="blockquote">

          <p class="mb-0">
          "If the path before you is clear, you're probably on someone else's."
          </p>
          <footer class="blockquote-footer">Joseph Campbell</footer>

          </blockquote>

          <p class="text-justify">Escrever um livro sobre Clojure em Português, utilizando material original e de uma forma que torne a linguagem acessível mesmo para quem nunca ouviu falar em programação funcional é um trabalho imenso e demorado que eu não teria conseguido concluir sozinho.</p>

          <p class="text-justify">Foi um trabalho que levou alguns anos de escrita e reescrita, com capítulos sendo inteiramente jogados fora para que apenas o melhor sobrevivesse.</p>

          <p class="text-justify">Minhas sinceras desculpas se eu me esquecer de alguém. Eu juro que não foi por mal.</p>

          <p class="text-justify"><b>Minha esposa e meus filhos, que mais uma vez tiveram que me aturar sentado no computador por horas e dias até que eu finalmente conseguisse terminar este projeto</b>.</p>

          <p class="text-justify">Ao amigo Francelino Guilherme que, ao ensinar conceitos de programação para crianças, me apresentou excelentes analogias para conceitos complicados para quem não desenvolve softwares.</p>

          <p class="text-justify">Paulo Suzart pelo apoio desde o primeiro momento. Paulo foi, até onde eu sei, o primeiro brasileiro a escrever sobre Clojure em Português e continua nessa tarefa até hoje.</p>

          <p class="text-justify">Thank you very much Joshua Glover, Chas Emerick, Michael Fogus, Bozhidar Batsov, Zachary Kim, Tom and Rich Hickey, Leonardo Borges and all the people from Clojure list.</p>

          <a name="#paulo" />

          <p class="text-justify">Paulo Silveira, Adriano Almeida e Igor Hercowitz, que compraram a ideia maluca de lançar um livro sobre Clojure num momento em que ela parecia maluca.</p>

          <p class="text-justify">Nicolas França, João Ferreira, Rodrigo Lorca, Ricardo Valeriano, Ana Gabriel, Rodrigo Flores, Edilson Peçanha, Andrew Rosa, Renan Reis, Gilmar Soares, que foram revisores de primeira hora e tiveram a honestidade de apontar onde a coisa não estava boa.</p>

          <p class="text-justify">A todos os participantes dos Grupos de Usuários Clojure de São Paulo e Rio de Janeiro, Clojure Brasil e Clojure Portugal, e também aos grupos GURU-SP, Scaladores e Clojure Australia (o antigo clj-syd) por terem servido de inspiração e modelo de como manter um grupo de usuários com um ambiente bacana e organizado.</p>

          <p class="text-justify">Colegas de trabalho que participaram de uma forma ou de outra do nascimento deste livro; Rodrigo Vidal, Luiz Costa, Douglas 'qmx' Campos, Breno Ferreira, Henrique Weissmann, José Valim, colegas que estão ajudando ativamente a divulgar e popularizar a programação funcional e o Clojure.</p>

        </div>
      </div>
    </div>
    <LittleFooter />
  </div>
</template>

<script>
import LittleFooter from '@/components/LittleFooter.vue'
import LittleHeader from '@/components/LittleHeader.vue'

export default {
  name: 'Thanks',
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>
