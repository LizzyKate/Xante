<template>
  <div>
    <header-vue />
    <tool-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import toolVue from '~/components/tool.vue'

export default {
  components: {
    toolVue,
    HeaderVue,
  },
}
</script>

<style>
</style>