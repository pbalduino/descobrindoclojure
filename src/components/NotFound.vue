<template>
  <pre>user=> ({{$route.params.chapter}}/read)
Syntax error compiling at (REPL:1:1).
No such namespace: {{$route.params.chapter}}

; 404 - A página que você procura não existe ou mudou de lugar
; <router-link to="/">Clique aqui</router-link> para voltar à página inicial</pre>

</template>

<script>
export default {
  name: 'NotFound'
}
</script>
