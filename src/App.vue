<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600,900&display=swap');

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

/*.bg-light {
  background-color: #8FB5FE!important;
}*/

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
