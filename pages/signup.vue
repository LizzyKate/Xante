<template>
  <div class="pt-20">
    <div class="text-center">
      <button @click="$router.push('/')">
        <img
          class="img1 xl:block hidden mx-auto"
          src="/images/logo.png"
          alt=""
        />
      </button>
    </div>
    <div class="text-center">
      <button @click="$router.push('/')">
        <img
          class="img1 xl:hidden block mx-auto"
          src="/images/app_icon.png"
          alt=""
        />
      </button>
    </div>
    <signup-vue />
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