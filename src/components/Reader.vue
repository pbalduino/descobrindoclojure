<template>
  <div>
    <LittleHeader />

    <div class="container">
      <div class="row">
        <h1>{{$route.params.chapter}}</h1>
      </div>
      <div class="row">
        <p>Aqui vem o conteúdo do livro</p>
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
