<template>
  <div>
    <div>
      <img
        class="img1 xl:block hidden mx-auto pt-20"
        src="/images/logo.png"
        alt=""
      />
    </div>

    <login-vue />
  </div>
</template>

<script>
import loginVue from "~/components/login.vue";

export default {
  name: "Login",
  components: { loginVue },
  layout: "form",
};
</script>

<style scoped>
</style>