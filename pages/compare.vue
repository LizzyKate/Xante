<template>
  <section @click="hideT">
    <div>
      <header-vue />
      <compare-vue />
    </div>
  </section>
</template>

<script>
import compareVue from '~/components/compare.vue'
import HeaderVue from '~/components/Header.vue'

export default {
  name: 'compare',
  components: {
    compareVue,
    HeaderVue,
  },
  transition(to, from) {
    if (to) {
      return 'fade-in'
    }
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


<style scoped>
</style>
