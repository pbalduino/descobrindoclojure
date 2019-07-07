<template>
  <div>
    <LittleHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm text-clojure-dark-blue">
          <h1>Aviso</h1>

          <p class="text-justify">
          Aprender programação funcional, Clojure, ou qualquer outra forma de <i>LISP</i>, pode mudar definitivamente a forma como você enxerga o desenvolvimento de software.
          </p>

          <p class="text-justify">
          São esperados efeitos colaterais como aumento de produtividade, concisão de código, surgimento ou aumento dos questionamento sobre as formas atualmente aceitas para se resolver problemas e, em alguns casos, aparecimento ou aumento de pragmatismo.
          </p>

          <p class="text-justify">
          Foram relatados casos de euforia por conta de um evento chamado ::iluminação::, onde o desenvolvedor subitamente entende a forma funcional de pensar.
          </p>

          <p class="text-justify">
          O autor e a editora não assumem a responsabilidade pelo fato de você se tornar um desenvolvedor ainda melhor e mais curioso após a leitura deste livro.
          </p>

          <p class="text-justify">
          Continue por sua conta e risco.
          </p>

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
  name: 'Warning',
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>
