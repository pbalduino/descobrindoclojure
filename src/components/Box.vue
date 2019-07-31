<template>
<div class="card bg-light">
  <div class="card-heading bg-primary text-light"><b>{{title}}</b></div>
  <div class="card-body">
    <slot />
  </div>
</div>
</template>

<style>
.card-heading {
  padding: 0.5rem;
}
</style>

<script>
export default {
  props: ['title']
}
</script>
