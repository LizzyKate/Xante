<template>
  <div class="pt-20 relative h-screen">
    <div class="text-center xl:block hidden">
      <button class="" @click="$router.push('/')">
        <img class="img1 mx-auto" src="/images/logo.png" alt="" />
      </button>
    </div>
    <div class="text-center xl:hidden block">
      <button @click="$router.push('/')">
        <img class="img1 mx-auto" src="/images/app_icon.png" alt="" />
      </button>
    </div>
    <login-vue />
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
import loginVue from '~/components/login.vue'

export default {
  name: 'Login',
  components: { loginVue },
  layout: 'form',
}
</script>

<style scoped>
</style>