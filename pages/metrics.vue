<template>
  <div>
    <header-vue />
    <metrics-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import metricsVue from '~/components/metrics.vue'

export default {
  components: {
    metricsVue,
    HeaderVue,
  },
}
</script>

<style>
</style>