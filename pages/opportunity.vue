<template>
  <div>
    <header-vue />
    <opportunity-vue />
  </div>
</template>

<script>
import HeaderVue from '~/components/Header.vue'
import opportunityVue from '~/components/opportunity.vue'

export default {
  components: {
    opportunityVue,
    HeaderVue,
  },
}
</script>

<style>
</style>