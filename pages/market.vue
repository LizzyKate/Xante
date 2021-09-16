<template>
  <div>
    <compare-vue />
  </div>
</template>

<script>
import compareVue from "~/components/compare.vue";

export default {
  name: "compare",
  components: {
    compareVue,
  },
  transition(to, from) {
    if (to) {
      return "fade-in";
    }
  },
};
</script>


<style scoped>
</style>
