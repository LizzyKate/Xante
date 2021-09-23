<template>
  <div class="header flex items-center justify-between relative">
    <button class="focus:outline-none" aria-label="Open Navbar" @click="open()">
      <img
        class="img2 xl:hidden block"
        src="../assets/images/Menu 2.png"
        alt=""
      />
    </button>
    <Logo />
    <Nav class="xl:block hidden" />
    <button id="prybtn" class="">Create Account</button>
    <div
      v-if="showMobileNav"
      class="absolute h-screen w-screen __mobile-nav"
      :class="showMobileNav ? 'swing-in-top-fwd' : 'swing-out-top-bck'"
    >
      <div class="text-right pr-8 pt-4">
        <button @click="close()">
          <i class="ri-close-line" style="font-size: 24px"></i>
        </button>
      </div>
      <ul class="flex flex-col justify-center items-center mt-24 __nav_list">
        <li>
          <nuxt-link to="/" style="color: white">Home</nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link to="/compare" style="color: white">Compare</nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link to="/analytics" style="color: white"
            >Market Analytics</nuxt-link
          >
        </li>
        <li class="mt-6">
          <nuxt-link to="/tools" style="color: white">Tools</nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link to="/opportunity" style="color: white"
            >Opportunities</nuxt-link
          >
        </li>
        <li class="mt-6">
          <nuxt-link to="/media" style="color: white">Media</nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link to="/contact" style="color: white">Contact Us</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Nav from './Nav.vue'
export default {
  components: { Logo, Nav },
  computed: {
    showMobileNav() {
      return this.$store.state.nav.mobileNav
    },
  },
  methods: {
    open() {
      this.$store.commit('nav/openNav', true)
    },
    close() {
      this.$store.commit('nav/openNav', false)
    },
  },
}
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
.__mobile-nav {
  background: #0b0f1a;
  z-index: 10000000000000;
  left: 0;
  top: 14px;
}
.__nav_list {
  font-family: 'Mulish';
  font-size: 16px;
}
#prybtn {
  /* height: 52px; */
  /* width: 150px; */
  border-radius: 4px;
  padding: 16px;
  background: #281e5d;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0em;
}

#prybtn :hover {
  background: #3e2f8c;
}

@media screen and (max-width: 768px) {
  .header {
    padding: 24px;
  }
  #prybtn {
    padding: 8px;
    font-size: 12px;
  }
}
</style>