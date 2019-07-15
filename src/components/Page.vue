<template>
<div>
  <LittleHeader />
  <div class="container">
    <div class="row">
      <div class="col-sm text-clojure-dark-blue">
        <slot />
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
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>
