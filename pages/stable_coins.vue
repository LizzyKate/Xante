<template>
  <div @click="hideT">
    <header-vue />
    <stable-coins-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import stableCoinsVue from '~/components/stable.coins.vue'

export default {
  components: {
    stableCoinsVue,
    HeaderVue,
  },
  methods: {
    hideT(event) {
      event.cancelBubble = true
      // close all open dropdowns
      const t = document.querySelector('.dropdown')
      const body = document.querySelector('body')
      if (body.contains(t)) {
        this.$store.commit('drop/dropAllVisibility')
      }
    },
  },
}
</script>

<style>
</style>