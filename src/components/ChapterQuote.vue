<template>
  <blockquote class='blockquote'>
    <p class='mb-0'><slot /></p>
    <footer class='blockquote-footer'>{{ author }} <cite v-title='work'>{{ work }}</cite></footer>
  </blockquote>
</template>

<script>
export default {
  props: ['author', 'work'],
  directives: {
    title: {}
  }
}
</script>
