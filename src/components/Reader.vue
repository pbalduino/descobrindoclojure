<template>
  <div>
    <LittleHeader />

    <div class="container" v-if="$store.book && $store.book.chapter[$route.params.chapter]">
      <div class="row">
        <h1>{{$route.params.chapter}}</h1>
      </div>
      <div class="row">
        {{ store.book.chapter[$route.params.chapter] }}
      </div>
    </div>
    <div class="container" v-else>
      <NotFound />
    </div>
    <LittleFooter />
  </div>
</template>

<script>
import LittleFooter from '@/components/LittleFooter.vue'
import LittleHeader from '@/components/LittleHeader.vue'
import NotFound from '@/components/NotFound'

export default {
  name: 'Reader',
  components: {
    LittleFooter,
    LittleHeader,
    NotFound
  }
}
</script>
