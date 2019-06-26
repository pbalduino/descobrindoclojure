<template>
  <div>
    <LittleHeader />

    <div class="container">
      <div class="row">
        <h1>Dedicatória</h1>
      </div>
      <div class="row">
        <blockquote class="blockquote">
          <p class="mb-0">"Aos meus filhos: Gu, Duda e Mari. Meu esforço é sempre por vocês."</p>
          <footer class="blockquote-footer">– Plínio Balduino</footer>
        </blockquote>
      </div>
    </div>

    <LittleFooter />
  </div>
</template>

<script>
import LittleFooter from './LittleFooter.vue';
import LittleHeader from './LittleHeader.vue';

export default {
  name: 'Dedication',
  components: {
    LittleFooter,
    LittleHeader
  }
}
</script>
