<template>
  <div class="header flex items-center justify-between">
    <img
      class="img2 xl:hidden block"
      src="../assets/images/Menu 2.png"
      alt=""
    />
    <Logo />
    <Nav class="xl:block hidden" />
    <PryButton text="Create Account" />
  </div>
</template>

<script>
import PryButton from "./Buttons/PryButton.vue";
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
export default {
  components: { Logo, Nav, PryButton },
};
</script>

<style>
.header {
  height: 80px;
  width: 100%;
  border-radius: 0px;
  background: #0b0f1a;
  padding: 14px 68px;
  position: fixed;
  top: 0;
  z-index: 100000000;
}

@media screen and (max-width: 768px) {
  .header {
    padding: 24px;
  }
}
</style>