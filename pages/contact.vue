<template>
  <div>
    <header-vue />
    <contact-vue />
  </div>
</template>

<script>
import contactVue from '~/components/contact.vue'
import HeaderVue from '~/components/Header.vue'

export default {
  components: {
    contactVue,
    HeaderVue,
  },
}
</script>

<style>
</style>