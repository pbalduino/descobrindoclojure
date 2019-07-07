<template>
  <div>
    <BigHeader />
    <HomeContent />
    <BigFooter />
    <Version />
  </div>
</template>

<script>
import BigFooter from './BigFooter.vue';
import BigHeader from './BigHeader.vue';
import HomeContent from './HomeContent.vue';

export default {
  name: 'Home',
  components: {
    BigFooter,
    BigHeader,
    HomeContent
  }
}
</script>
