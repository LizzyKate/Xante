<template>
  <div class="">
    <header-vue />
    <home-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import homeVue from '~/components/home.vue'

export default {
  components: {
    homeVue,
    HeaderVue,
  },
}
</script>

<style >
</style>
