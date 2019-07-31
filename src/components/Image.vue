<template>
<img v-src="src" v-alt="description" />
</template>

<script>
export default {
  props: ['src', 'description', 'width', 'label']
}
</script>
