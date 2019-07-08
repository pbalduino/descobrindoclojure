<template>
<div id="version">
<small>Versão: {{ GitHash }}</small>
</div>
</template>

<script>
import GitHash from "@/assets/hash.json";

export default {
  name: "Version",
  data() {
    return {
      GitHash
    };
  }
};
</script>
