<template>
  <div>
    <LittleHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm text-clojure-dark-blue">
          <h1>Dedicatória</h1>
          <blockquote class="blockquote">
            <p class="mb-0">
              "Aos meus filhos: Gu, Duda e Mari.<br />
              Meu esforço é sempre por vocês."
            </p>
            <footer class="blockquote-footer">Plínio Balduino</footer>
          </blockquote>
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
  name: 'Dedication',
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>
