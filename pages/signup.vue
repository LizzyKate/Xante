<template>
  <div>
    <div>
      <img
        class="img1 xl:block hidden mx-auto pt-20"
        src="/images/logo.png"
        alt=""
      />
    </div>

    <signup-vue />
  </div>
</template>

<script>
import signupVue from "~/components/signup.vue";

export default {
  name: "Login",
  components: { signupVue },
  layout: "form",
};
</script>

<style scoped>
</style>