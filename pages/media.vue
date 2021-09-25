<template>
  <div>
    <header-vue />
    <media-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import mediaVue from '~/components/media.vue'

export default {
  components: {
    mediaVue,
    HeaderVue,
  },
}
</script>

<style>
</style>