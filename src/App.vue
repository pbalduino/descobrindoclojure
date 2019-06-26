<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-family: 'Montserrat', sans-serif;
}

li a {
  color: #5881D8!important;
}

h1 a {
  color: #f8f9fa!important;
}

.bg-primary {
  background-color: #5881D8!important;
}

.bg-secondary {
  background-color: #62B132!important;
}

.bg-light {
  background-color: #8FB5FE!important;
}

.text-clojure-dark-blue {
  color: #5881D8!important;
}

.text-clojure-dark-green {
  color: #62B132!important;
}

img.img-cover {
  border: solid 1px #5881D8;
}
</style>
