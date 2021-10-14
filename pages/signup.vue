<template>
  <div class="pt-20 relative h-screen">
    <div class="text-center xl:block hidden">
      <nuxt-link to="/" class="">
        <img
          class="img1 mx-auto"
          style="width: 150px"
          src="/images/logo.png"
          alt=""
        />
      </nuxt-link>
    </div>
    <div class="text-center xl:hidden block">
      <nuxt-link to="/">
        <img class="img1 mx-auto" src="/images/app_icon.png" alt="" />
      </nuxt-link>
    </div>
    <signup-vue />
    <div class="absolute xl:block hidden bottom-0 right-0">
      <img src="/images/first.png" alt="" />
    </div>
    <div class="absolute xl:block hidden bottom-0" style="right: 200px">
      <img src="/images/half.png" alt="" />
    </div>
    <div class="absolute xl:block hidden right-0" style="bottom: 80px">
      <img src="/images/fifth.png" alt="" />
    </div>
  </div>
</template>

<script>
import signupVue from '~/components/signup.vue'

export default {
  name: 'Login',
  components: { signupVue },
  layout: 'form',
}
</script>

<style scoped>
</style>